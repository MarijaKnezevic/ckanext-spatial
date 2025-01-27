{#
Displays a map form widget to capture a polygon and update an input
field with a given id with the polygon's geometry

input_id
    The element id of a text input accepting a GeoJSON polygon geometry

extent
    An optional GeoJSON geometry to be displayed and zoomed into on the map,
    to be editable, or replaceable with a newsly drawn polygon,
    finally to be copied into a form input with id input_id

e.g.

    {% snippet "spatial/snippets/spatial_form.html", input_id="field-spatial", 
    extent="{ \"type\": \"Polygon\", \"coordinates\": [[[74.89, 29.39],[74.89, 38.45], [60.50, 38.45], [60.50, 29.39], [74.89, 29.39]]]}" %}

#}
<!-- spatial form for {{ input_id }} begin -->
{% set map_config = h.get_common_map_config() %}
<div class="dataset-map" 
    data-module="spatial-form"
    data-input_id="{{ input_id }}"
    data-extent="{{ extent }}" 
    data-module-site_url="{{ h.dump_json(h.url('/', locale='default', qualified=true)) }}" 
    data-module-map_config="{{ h.dump_json(map_config) }}">
    <div id="dataset-map-container"></div>
    <div id="dataset-map-attribution">
    {% snippet "spatial/snippets/map_attribution.html", map_config=map_config %}
    </div>
</div>

    <div class="info-block">Debug: Snippet spatial/snippets/spatial_form.html 
    received id {{ input_id }}<br/> and extent {{ extent }}</div>

{% asset 'ckanext-spatial/spatial_form_js' %}
<!-- spatial form for {{input_id}} end -->
    