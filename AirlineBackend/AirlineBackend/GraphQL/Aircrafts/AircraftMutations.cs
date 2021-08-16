using AirlineBackend.Data;
using AirlineBackend.Extensions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Octokit;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Aircrafts
{
    [ExtendObjectType(name: "Mutation")]
    public class AircraftMutations
    {
        [UseAppDbContext]
        public async Task<Aircraft> AddAircraftAsync(AddAircraftInput input,
        [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraft = new Aircraft
            {
                Type = input.Type,
                GitHub = input.GitHub,
                ImageURL = input.ImageURL,
            };

            context.Aircrafts.Add(aircraft);
            await context.SaveChangesAsync(cancellationToken);

            return aircraft;
        }


        [UseAppDbContext]
        public async Task<Aircraft> EditAircraftAsync(EditAircraftInput input,
                [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraft = await context.Aircrafts.FindAsync(int.Parse(input.Id));

            aircraft.Type = input.Type ?? aircraft.Type;
            //student.GitHub = input.GitHub ?? student.GitHub;
            aircraft.ImageURL = input.ImageURL ?? aircraft.ImageURL;

            await context.SaveChangesAsync(cancellationToken);

            return aircraft;
        }




        [UseAppDbContext]
        public async Task<LoginPayload> LoginAsync(LoginInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var client = new GitHubClient(new ProductHeaderValue("Airline-MSA"));

            var request = new OauthTokenRequest(Startup.Configuration["Github:ClientId"], Startup.Configuration["Github:ClientSecret"], input.Code);
            var tokenInfo = await client.Oauth.CreateAccessToken(request);

            if (tokenInfo.AccessToken == null)
            {
                throw new GraphQLRequestException(ErrorBuilder.New()
                    .SetMessage("Bad code")
                    .SetCode("AUTH_NOT_AUTHENTICATED")
                    .Build());
            }

            client.Credentials = new Credentials(tokenInfo.AccessToken);
            var user = await client.User.Current();

            var aircraft = await context.Aircrafts.FirstOrDefaultAsync(a => a.GitHub == user.Login, cancellationToken);

            if (aircraft == null)
            {

                aircraft = new Aircraft
                {
                    Type = user.Name ?? user.Login,
                    GitHub = user.Login,
                    ImageURL = user.AvatarUrl,
                };

                context.Aircrafts.Add(aircraft);
                await context.SaveChangesAsync(cancellationToken);
            }


            // authentication successful so generate jwt token
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Startup.Configuration["JWT:Secret"]));
            var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>{
                new Claim("aircraftId", aircraft.Id.ToString()),
            };

            var jwtToken = new JwtSecurityToken(
                "Airline-MSA",
                "MSA-airline",
                claims,
                expires: DateTime.Now.AddDays(90),
                signingCredentials: credentials);

            string token = new JwtSecurityTokenHandler().WriteToken(jwtToken);

            return new LoginPayload(aircraft, token);

        }

    }
}
