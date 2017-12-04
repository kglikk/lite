using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using lite.Models;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace lite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<DataContext>(options =>options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc();

            // 1. Add Authentication Services
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.Authority = "https://electrisim.eu.auth0.com/";
                options.Audience = "https://api.electrisim.com";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, DataContext contextDB)
        {
            app.UseDefaultFiles();

            //dodane do ogarniecia linkowania, żeby nie używać useHash a dalej móc przechodzić do linków poprzez wpisywanie adresu/
            /*
             
            app.Use( async ( context, next ) => {
                await next();

                if( context.Response.StatusCode == 404 && !Path.HasExtension( context.Request.Path.Value ) ) {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
            */
            
            app.UseStaticFiles();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
                
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
                 
            }
              // 2. Enable authentication middleware
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");


                // when the user types in a link handled by client side routing to the address bar or refreshes
                // the page, that triggers the server routing. The server should pass that onto the
                // client, so Angular can handle the route
                /*
                 
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",                    
                    defaults: new { controller = "Home", action = "Index" });
                    */

                    // Catch all Route - catches anything not caught be other routes
                                        
                    routes.MapRoute(
                        name: "catch-all",
                        template: "{*url}",
                        defaults: new {controller = "Home", action = "RedirectIndex"}
                    );
                
                
            });

            //handle client side routes
            /*
             
            app.Run( async (context) =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(env.WebRootPath,"index.html"));
            });
            */
             //inicjalizacja bazy danych
            DbInitializer.Initialize(contextDB);
        }
    }
}
