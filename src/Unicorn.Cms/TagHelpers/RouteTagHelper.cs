using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Unicorn.Cms.TagHelpers
{
    using Microsoft.AspNetCore.Mvc.Routing;

    [HtmlTargetElement("a", Attributes = RouteTagAttributeName)]
	public class RouteTagHelper : TagHelper
	{
		private const string RouteTagAttributeName = "highlight-active";
		private IUrlHelper urlHelper;

		public RouteTagHelper(IUrlHelperFactory urlHelperFactory, IActionContextAccessor actionContextAccessor)
		{
			this.urlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
		}

		//Optional attribute. If not defined, "active" class will be used
		[HtmlAttributeName("css-active-class")]
		public string CssClass { get; set; } = "active";

		public override void Process(TagHelperContext context, TagHelperOutput output)
		{
			//Remove marker attribute
			output.Attributes.Remove(output.Attributes["highlight-active"]);

			//Get the url from href attribute generaed in the default AnchorTagHelper
			var url = output.Attributes["href"].Value.ToString();

			//Add active css class only when current request matches the generated href
			var currentRouteUrl = this.urlHelper.Action();
			if (url == currentRouteUrl)
			{
				var linkTag = new TagBuilder("a");
				linkTag.Attributes.Add("class", this.CssClass);
				output.MergeAttributes(linkTag);
			}
		}
	}
}
