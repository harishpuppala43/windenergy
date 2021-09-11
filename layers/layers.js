var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wind_1 = new ol.format.GeoJSON();
var features_Wind_1 = format_Wind_1.readFeatures(json_Wind_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wind_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wind_1.addFeatures(features_Wind_1);
var lyr_Wind_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wind_1, 
                style: style_Wind_1,
                interactive: false,
    title: 'Wind<br />\
    <img src="styles/legend/Wind_1_0.png" /> 1<br />\
    <img src="styles/legend/Wind_1_1.png" /> 2<br />\
    <img src="styles/legend/Wind_1_2.png" /> 3<br />\
    <img src="styles/legend/Wind_1_3.png" /> 4<br />\
    <img src="styles/legend/Wind_1_4.png" /> 5<br />'
        });
var format_Landuselandcover_2 = new ol.format.GeoJSON();
var features_Landuselandcover_2 = format_Landuselandcover_2.readFeatures(json_Landuselandcover_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuselandcover_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuselandcover_2.addFeatures(features_Landuselandcover_2);
var lyr_Landuselandcover_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuselandcover_2, 
                style: style_Landuselandcover_2,
                interactive: false,
    title: 'Land use land cover<br />\
    <img src="styles/legend/Landuselandcover_2_0.png" /> 1<br />\
    <img src="styles/legend/Landuselandcover_2_1.png" /> 2<br />\
    <img src="styles/legend/Landuselandcover_2_2.png" /> 3<br />\
    <img src="styles/legend/Landuselandcover_2_3.png" /> 4<br />\
    <img src="styles/legend/Landuselandcover_2_4.png" /> 5<br />'
        });
var format_Transmisisonlines_3 = new ol.format.GeoJSON();
var features_Transmisisonlines_3 = format_Transmisisonlines_3.readFeatures(json_Transmisisonlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transmisisonlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transmisisonlines_3.addFeatures(features_Transmisisonlines_3);
var lyr_Transmisisonlines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transmisisonlines_3, 
                style: style_Transmisisonlines_3,
                interactive: false,
    title: 'Transmisison lines<br />\
    <img src="styles/legend/Transmisisonlines_3_0.png" /> 1<br />\
    <img src="styles/legend/Transmisisonlines_3_1.png" /> 2<br />\
    <img src="styles/legend/Transmisisonlines_3_2.png" /> 3<br />\
    <img src="styles/legend/Transmisisonlines_3_3.png" /> 4<br />\
    <img src="styles/legend/Transmisisonlines_3_4.png" /> 5<br />'
        });
var format_Substation_4 = new ol.format.GeoJSON();
var features_Substation_4 = format_Substation_4.readFeatures(json_Substation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Substation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Substation_4.addFeatures(features_Substation_4);
var lyr_Substation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Substation_4, 
                style: style_Substation_4,
                interactive: false,
    title: 'Substation<br />\
    <img src="styles/legend/Substation_4_0.png" /> 1<br />\
    <img src="styles/legend/Substation_4_1.png" /> 2<br />\
    <img src="styles/legend/Substation_4_2.png" /> 3<br />\
    <img src="styles/legend/Substation_4_3.png" /> 4<br />\
    <img src="styles/legend/Substation_4_4.png" /> 5<br />'
        });
var format_Slope_5 = new ol.format.GeoJSON();
var features_Slope_5 = format_Slope_5.readFeatures(json_Slope_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slope_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slope_5.addFeatures(features_Slope_5);
var lyr_Slope_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Slope_5, 
                style: style_Slope_5,
                interactive: false,
    title: 'Slope<br />\
    <img src="styles/legend/Slope_5_0.png" /> 1<br />\
    <img src="styles/legend/Slope_5_1.png" /> 2<br />\
    <img src="styles/legend/Slope_5_2.png" /> 3<br />\
    <img src="styles/legend/Slope_5_3.png" /> 4<br />\
    <img src="styles/legend/Slope_5_4.png" /> 5<br />'
        });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                interactive: false,
    title: 'Road<br />\
    <img src="styles/legend/Road_6_0.png" /> 1<br />\
    <img src="styles/legend/Road_6_1.png" /> 2<br />\
    <img src="styles/legend/Road_6_2.png" /> 3<br />\
    <img src="styles/legend/Road_6_3.png" /> 4<br />\
    <img src="styles/legend/Road_6_4.png" /> 5<br />'
        });
var format_Elevation_7 = new ol.format.GeoJSON();
var features_Elevation_7 = format_Elevation_7.readFeatures(json_Elevation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevation_7.addFeatures(features_Elevation_7);
var lyr_Elevation_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elevation_7, 
                style: style_Elevation_7,
                interactive: false,
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_7_0.png" /> 1<br />\
    <img src="styles/legend/Elevation_7_1.png" /> 2<br />\
    <img src="styles/legend/Elevation_7_2.png" /> 3<br />\
    <img src="styles/legend/Elevation_7_3.png" /> 4<br />\
    <img src="styles/legend/Elevation_7_4.png" /> 5<br />'
        });
var format_ContraintsMap_8 = new ol.format.GeoJSON();
var features_ContraintsMap_8 = format_ContraintsMap_8.readFeatures(json_ContraintsMap_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContraintsMap_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContraintsMap_8.addFeatures(features_ContraintsMap_8);
var lyr_ContraintsMap_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContraintsMap_8, 
                style: style_ContraintsMap_8,
                interactive: false,
    title: 'Contraints Map<br />\
    <img src="styles/legend/ContraintsMap_8_0.png" /> 0<br />\
    <img src="styles/legend/ContraintsMap_8_1.png" /> 1<br />'
        });
var format_SuitabilityMap_9 = new ol.format.GeoJSON();
var features_SuitabilityMap_9 = format_SuitabilityMap_9.readFeatures(json_SuitabilityMap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuitabilityMap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuitabilityMap_9.addFeatures(features_SuitabilityMap_9);
var lyr_SuitabilityMap_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuitabilityMap_9, 
                style: style_SuitabilityMap_9,
                interactive: false,
    title: 'Suitability Map<br />\
    <img src="styles/legend/SuitabilityMap_9_0.png" /> 1<br />\
    <img src="styles/legend/SuitabilityMap_9_1.png" /> 2<br />\
    <img src="styles/legend/SuitabilityMap_9_2.png" /> 3<br />\
    <img src="styles/legend/SuitabilityMap_9_3.png" /> 4<br />\
    <img src="styles/legend/SuitabilityMap_9_4.png" /> 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Wind_1.setVisible(true);lyr_Landuselandcover_2.setVisible(true);lyr_Transmisisonlines_3.setVisible(true);lyr_Substation_4.setVisible(true);lyr_Slope_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_Elevation_7.setVisible(true);lyr_ContraintsMap_8.setVisible(true);lyr_SuitabilityMap_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Wind_1,lyr_Landuselandcover_2,lyr_Transmisisonlines_3,lyr_Substation_4,lyr_Slope_5,lyr_Road_6,lyr_Elevation_7,lyr_ContraintsMap_8,lyr_SuitabilityMap_9];
lyr_Wind_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Landuselandcover_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Transmisisonlines_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Substation_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Slope_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Road_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Elevation_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_ContraintsMap_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_SuitabilityMap_9.set('fieldAliases', {});
lyr_Wind_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Landuselandcover_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Transmisisonlines_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Substation_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Slope_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Elevation_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_ContraintsMap_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_SuitabilityMap_9.set('fieldImages', {});
lyr_Wind_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Landuselandcover_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Transmisisonlines_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Substation_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Slope_5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Road_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Elevation_7.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_ContraintsMap_8.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_SuitabilityMap_9.set('fieldLabels', {});
lyr_SuitabilityMap_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});