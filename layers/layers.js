var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '天地图-矢量地图',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t6.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=887444b5ee54053acee31e242698ab55'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '天地图-矢量注记',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t2.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=887444b5ee54053acee31e242698ab55'
            })
        });
var format_BOC_2 = new ol.format.GeoJSON();
var features_BOC_2 = format_BOC_2.readFeatures(json_BOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOC_2.addFeatures(features_BOC_2);
var lyr_BOC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOC_2, 
                style: style_BOC_2,
                popuplayertitle: 'BOC',
                interactive: true,
                title: '<img src="styles/legend/BOC_2.png" /> BOC'
            });
var format_ABC_3 = new ol.format.GeoJSON();
var features_ABC_3 = format_ABC_3.readFeatures(json_ABC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABC_3.addFeatures(features_ABC_3);
var lyr_ABC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABC_3, 
                style: style_ABC_3,
                popuplayertitle: 'ABC',
                interactive: true,
                title: '<img src="styles/legend/ABC_3.png" /> ABC'
            });
var format_ICBC_4 = new ol.format.GeoJSON();
var features_ICBC_4 = format_ICBC_4.readFeatures(json_ICBC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICBC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICBC_4.addFeatures(features_ICBC_4);
var lyr_ICBC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICBC_4, 
                style: style_ICBC_4,
                popuplayertitle: 'ICBC',
                interactive: true,
                title: '<img src="styles/legend/ICBC_4.png" /> ICBC'
            });
var format_CCB_5 = new ol.format.GeoJSON();
var features_CCB_5 = format_CCB_5.readFeatures(json_CCB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCB_5.addFeatures(features_CCB_5);
var lyr_CCB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCB_5, 
                style: style_CCB_5,
                popuplayertitle: 'CCB',
                interactive: true,
                title: '<img src="styles/legend/CCB_5.png" /> CCB'
            });
var group_layer = new ol.layer.Group({
                                layers: [lyr__0,lyr__1,lyr_BOC_2,lyr_ABC_3,lyr_ICBC_4,lyr_CCB_5,],
                                fold: 'open',
                                title: 'layer'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_BOC_2.setVisible(true);lyr_ABC_3.setVisible(true);lyr_ICBC_4.setVisible(true);lyr_CCB_5.setVisible(true);
var layersList = [group_layer];
lyr_BOC_2.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_ABC_3.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_ICBC_4.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_CCB_5.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_BOC_2.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_ABC_3.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_ICBC_4.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_CCB_5.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_BOC_2.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_ABC_3.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_ICBC_4.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_CCB_5.set('fieldLabels', {'名称': 'header label - always visible', '行政区': 'header label - visible with data', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_CCB_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});