using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UnitedStatesGDP.Startup))]
namespace UnitedStatesGDP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
