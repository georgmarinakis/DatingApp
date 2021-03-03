using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    // DI services: Tokens and DataContext
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // Service duration: http request. Once the request is stopped, the service is terminated.
            services.AddScoped<ITokenService, TokenService>();

            // Registers the given context as a service in the Microsoft.Extensions.DependencyInjection.IServiceCollection.
            // Τα δεδομένα θα στα φέρει η κλάση DataContext και θα συνδεθείς με την ΒΔ (Sqlite) με το "DefaultConnection" connection string (appsettings.Development.json).
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            return services;
        }     
    }
}