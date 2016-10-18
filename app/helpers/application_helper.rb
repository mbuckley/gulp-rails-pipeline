include ActionView::Helpers::AssetTagHelper
module ApplicationHelper

  def stylesheet_link_tag(url, options={})
    url = AssetManifest.stylesheet_path(url)

    super(url, options)
  end

  def fe_javascript_src(url, options={})
    "/assets/#{AssetManifest.javascript_path(url)}"
  end

  def image_tag(url, options={})
    url = AssetManifest.asset_path(url)

    super(url, options)
  end

  def image_path(url, options={})
    url = AssetManifest.asset_path(url)

    super(url, options)
  end

  def image_url(url, options={})
    url = AssetManifest.asset_path(url)

    super((ActionController::Base.asset_host || "") + url, options)
  end
end
