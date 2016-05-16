using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Infrastructure;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.TagHelpers;
using Microsoft.AspNet.Razor.TagHelpers;

namespace Unicorn.Cms.TagHelpers
{
	[HtmlTargetElement("a", Attributes = RouteTagAttributeName)]
	public class RouteTagHelper : TagHelper
	{
		private const string RouteTagAttributeName = "highlight-active";
		private IActionContextAccessor actionContextAccessor;
		private IUrlHelper urlHelper;

		public RouteTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelper urlHelper)
		{
			this.actionContextAccessor = actionContextAccessor;
			this.urlHelper = urlHelper;
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
