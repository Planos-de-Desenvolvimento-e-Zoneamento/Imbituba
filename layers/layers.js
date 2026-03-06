ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-48.665590, -28.241108, -48.629206, -28.221036]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadedeConservao_1 = new ol.format.GeoJSON();
var features_UnidadedeConservao_1 = format_UnidadedeConservao_1.readFeatures(json_UnidadedeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadedeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservao_1.addFeatures(features_UnidadedeConservao_1);
var lyr_UnidadedeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservao_1, 
                style: style_UnidadedeConservao_1,
                popuplayertitle: 'Unidade de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeConservao_1.png" /> Unidade de Conservação '
            });
var format_ServiosdeApoio_2 = new ol.format.GeoJSON();
var features_ServiosdeApoio_2 = format_ServiosdeApoio_2.readFeatures(json_ServiosdeApoio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiosdeApoio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosdeApoio_2.addFeatures(features_ServiosdeApoio_2);
var lyr_ServiosdeApoio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiosdeApoio_2, 
                style: style_ServiosdeApoio_2,
                popuplayertitle: 'Serviços de Apoio',
                interactive: true,
                title: '<img src="styles/legend/ServiosdeApoio_2.png" /> Serviços de Apoio'
            });
var format_Equipamentos_3 = new ol.format.GeoJSON();
var features_Equipamentos_3 = format_Equipamentos_3.readFeatures(json_Equipamentos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Equipamentos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_3.addFeatures(features_Equipamentos_3);
var lyr_Equipamentos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamentos_3, 
                style: style_Equipamentos_3,
                popuplayertitle: 'Equipamentos',
                interactive: true,
                title: '<img src="styles/legend/Equipamentos_3.png" /> Equipamentos'
            });
var format_FundeadourosPropostos_4 = new ol.format.GeoJSON();
var features_FundeadourosPropostos_4 = format_FundeadourosPropostos_4.readFeatures(json_FundeadourosPropostos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosPropostos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosPropostos_4.addFeatures(features_FundeadourosPropostos_4);
var lyr_FundeadourosPropostos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosPropostos_4, 
                style: style_FundeadourosPropostos_4,
                popuplayertitle: 'Fundeadouros - Propostos',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosPropostos_4.png" /> Fundeadouros - Propostos'
            });
var format_Fundeadouros_5 = new ol.format.GeoJSON();
var features_Fundeadouros_5 = format_Fundeadouros_5.readFeatures(json_Fundeadouros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fundeadouros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_5.addFeatures(features_Fundeadouros_5);
var lyr_Fundeadouros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_5, 
                style: style_Fundeadouros_5,
                popuplayertitle: 'Fundeadouros ',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_5.png" /> Fundeadouros '
            });
var format_BaciadeEvoluo_6 = new ol.format.GeoJSON();
var features_BaciadeEvoluo_6 = format_BaciadeEvoluo_6.readFeatures(json_BaciadeEvoluo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluo_6.addFeatures(features_BaciadeEvoluo_6);
var lyr_BaciadeEvoluo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluo_6, 
                style: style_BaciadeEvoluo_6,
                popuplayertitle: 'Bacia de Evolução ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluo_6.png" /> Bacia de Evolução '
            });
var format_CanaldeAcessoMdioPrazo_7 = new ol.format.GeoJSON();
var features_CanaldeAcessoMdioPrazo_7 = format_CanaldeAcessoMdioPrazo_7.readFeatures(json_CanaldeAcessoMdioPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoMdioPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoMdioPrazo_7.addFeatures(features_CanaldeAcessoMdioPrazo_7);
var lyr_CanaldeAcessoMdioPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoMdioPrazo_7, 
                style: style_CanaldeAcessoMdioPrazo_7,
                popuplayertitle: 'Canal de Acesso - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoMdioPrazo_7.png" /> Canal de Acesso - Médio Prazo'
            });
var format_CanaldeAcessoSituaoAtual_8 = new ol.format.GeoJSON();
var features_CanaldeAcessoSituaoAtual_8 = format_CanaldeAcessoSituaoAtual_8.readFeatures(json_CanaldeAcessoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcessoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcessoSituaoAtual_8.addFeatures(features_CanaldeAcessoSituaoAtual_8);
var lyr_CanaldeAcessoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcessoSituaoAtual_8, 
                style: style_CanaldeAcessoSituaoAtual_8,
                popuplayertitle: 'Canal de Acesso - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcessoSituaoAtual_8.png" /> Canal de Acesso - Situação Atual'
            });
var format_AcessosHidrovirios_9 = new ol.format.GeoJSON();
var features_AcessosHidrovirios_9 = format_AcessosHidrovirios_9.readFeatures(json_AcessosHidrovirios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidrovirios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidrovirios_9.addFeatures(features_AcessosHidrovirios_9);
var lyr_AcessosHidrovirios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidrovirios_9, 
                style: style_AcessosHidrovirios_9,
                popuplayertitle: 'Acessos Hidroviários',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidrovirios_9.png" /> Acessos Hidroviários'
            });
var format_AcessosDutoviriosMdioPrazo_10 = new ol.format.GeoJSON();
var features_AcessosDutoviriosMdioPrazo_10 = format_AcessosDutoviriosMdioPrazo_10.readFeatures(json_AcessosDutoviriosMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosMdioPrazo_10.addFeatures(features_AcessosDutoviriosMdioPrazo_10);
var lyr_AcessosDutoviriosMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosMdioPrazo_10, 
                style: style_AcessosDutoviriosMdioPrazo_10,
                popuplayertitle: 'Acessos Dutoviários - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosMdioPrazo_10.png" /> Acessos Dutoviários - Médio Prazo'
            });
var format_AcessosDutoviriosSituaoAtual_11 = new ol.format.GeoJSON();
var features_AcessosDutoviriosSituaoAtual_11 = format_AcessosDutoviriosSituaoAtual_11.readFeatures(json_AcessosDutoviriosSituaoAtual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosSituaoAtual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosSituaoAtual_11.addFeatures(features_AcessosDutoviriosSituaoAtual_11);
var lyr_AcessosDutoviriosSituaoAtual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosSituaoAtual_11, 
                style: style_AcessosDutoviriosSituaoAtual_11,
                popuplayertitle: 'Acessos Dutoviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosSituaoAtual_11.png" /> Acessos Dutoviários - Situação Atual'
            });
var format_AcessosInternosFerroviriosCurtoPrazo_12 = new ol.format.GeoJSON();
var features_AcessosInternosFerroviriosCurtoPrazo_12 = format_AcessosInternosFerroviriosCurtoPrazo_12.readFeatures(json_AcessosInternosFerroviriosCurtoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosFerroviriosCurtoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosFerroviriosCurtoPrazo_12.addFeatures(features_AcessosInternosFerroviriosCurtoPrazo_12);
var lyr_AcessosInternosFerroviriosCurtoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosFerroviriosCurtoPrazo_12, 
                style: style_AcessosInternosFerroviriosCurtoPrazo_12,
                popuplayertitle: 'Acessos Internos Ferroviários - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosFerroviriosCurtoPrazo_12.png" /> Acessos Internos Ferroviários - Curto Prazo'
            });
var format_AcessosInternosFerroviriosSituaoAtual_13 = new ol.format.GeoJSON();
var features_AcessosInternosFerroviriosSituaoAtual_13 = format_AcessosInternosFerroviriosSituaoAtual_13.readFeatures(json_AcessosInternosFerroviriosSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosFerroviriosSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosFerroviriosSituaoAtual_13.addFeatures(features_AcessosInternosFerroviriosSituaoAtual_13);
var lyr_AcessosInternosFerroviriosSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosFerroviriosSituaoAtual_13, 
                style: style_AcessosInternosFerroviriosSituaoAtual_13,
                popuplayertitle: 'Acessos Internos Ferroviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosFerroviriosSituaoAtual_13.png" /> Acessos Internos Ferroviários - Situação Atual'
            });
var format_AcessosFerrovirios_14 = new ol.format.GeoJSON();
var features_AcessosFerrovirios_14 = format_AcessosFerrovirios_14.readFeatures(json_AcessosFerrovirios_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerrovirios_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerrovirios_14.addFeatures(features_AcessosFerrovirios_14);
var lyr_AcessosFerrovirios_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerrovirios_14, 
                style: style_AcessosFerrovirios_14,
                popuplayertitle: 'Acessos Ferroviários',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerrovirios_14.png" /> Acessos Ferroviários'
            });
var format_AcessosInternosRodoviriosMdioPrazo_15 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosMdioPrazo_15 = format_AcessosInternosRodoviriosMdioPrazo_15.readFeatures(json_AcessosInternosRodoviriosMdioPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosMdioPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosMdioPrazo_15.addFeatures(features_AcessosInternosRodoviriosMdioPrazo_15);
var lyr_AcessosInternosRodoviriosMdioPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosMdioPrazo_15, 
                style: style_AcessosInternosRodoviriosMdioPrazo_15,
                popuplayertitle: 'Acessos Internos Rodoviários - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosMdioPrazo_15.png" /> Acessos Internos Rodoviários - Médio Prazo'
            });
var format_AcessosInternosRodoviriosSituaoAtual_16 = new ol.format.GeoJSON();
var features_AcessosInternosRodoviriosSituaoAtual_16 = format_AcessosInternosRodoviriosSituaoAtual_16.readFeatures(json_AcessosInternosRodoviriosSituaoAtual_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodoviriosSituaoAtual_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodoviriosSituaoAtual_16.addFeatures(features_AcessosInternosRodoviriosSituaoAtual_16);
var lyr_AcessosInternosRodoviriosSituaoAtual_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodoviriosSituaoAtual_16, 
                style: style_AcessosInternosRodoviriosSituaoAtual_16,
                popuplayertitle: 'Acessos Internos Rodoviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodoviriosSituaoAtual_16.png" /> Acessos Internos Rodoviários - Situação Atual'
            });
var format_AcessosRodoviriosLongoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosLongoPrazo_17 = format_AcessosRodoviriosLongoPrazo_17.readFeatures(json_AcessosRodoviriosLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosLongoPrazo_17.addFeatures(features_AcessosRodoviriosLongoPrazo_17);
var lyr_AcessosRodoviriosLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosLongoPrazo_17, 
                style: style_AcessosRodoviriosLongoPrazo_17,
                popuplayertitle: 'Acessos Rodoviários - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosLongoPrazo_17.png" /> Acessos Rodoviários - Longo Prazo'
            });
var format_AcessosRodoviriosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosCurtoPrazo_18 = format_AcessosRodoviriosCurtoPrazo_18.readFeatures(json_AcessosRodoviriosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosCurtoPrazo_18.addFeatures(features_AcessosRodoviriosCurtoPrazo_18);
var lyr_AcessosRodoviriosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosCurtoPrazo_18, 
                style: style_AcessosRodoviriosCurtoPrazo_18,
                popuplayertitle: 'Acessos Rodoviários - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosCurtoPrazo_18.png" /> Acessos Rodoviários - Curto Prazo'
            });
var format_AcessosRodoviriosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosSituaoAtual_19 = format_AcessosRodoviriosSituaoAtual_19.readFeatures(json_AcessosRodoviriosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosSituaoAtual_19.addFeatures(features_AcessosRodoviriosSituaoAtual_19);
var lyr_AcessosRodoviriosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosSituaoAtual_19, 
                style: style_AcessosRodoviriosSituaoAtual_19,
                popuplayertitle: 'Acessos Rodoviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosSituaoAtual_19.png" /> Acessos Rodoviários - Situação Atual'
            });
var format_InstalaesNoOperacionaisLongoPrazo_20 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisLongoPrazo_20 = format_InstalaesNoOperacionaisLongoPrazo_20.readFeatures(json_InstalaesNoOperacionaisLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisLongoPrazo_20.addFeatures(features_InstalaesNoOperacionaisLongoPrazo_20);
var lyr_InstalaesNoOperacionaisLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisLongoPrazo_20, 
                style: style_InstalaesNoOperacionaisLongoPrazo_20,
                popuplayertitle: 'Instalações Não Operacionais - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisLongoPrazo_20.png" /> Instalações Não Operacionais - Longo Prazo'
            });
var format_InstalaesNoOperacionaisMdioPrazo_21 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisMdioPrazo_21 = format_InstalaesNoOperacionaisMdioPrazo_21.readFeatures(json_InstalaesNoOperacionaisMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisMdioPrazo_21.addFeatures(features_InstalaesNoOperacionaisMdioPrazo_21);
var lyr_InstalaesNoOperacionaisMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisMdioPrazo_21, 
                style: style_InstalaesNoOperacionaisMdioPrazo_21,
                popuplayertitle: 'Instalações Não Operacionais - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisMdioPrazo_21.png" /> Instalações Não Operacionais - Médio Prazo'
            });
var format_InstalaesNoOperacionaisCurtoPrazo_22 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisCurtoPrazo_22 = format_InstalaesNoOperacionaisCurtoPrazo_22.readFeatures(json_InstalaesNoOperacionaisCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisCurtoPrazo_22.addFeatures(features_InstalaesNoOperacionaisCurtoPrazo_22);
var lyr_InstalaesNoOperacionaisCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisCurtoPrazo_22, 
                style: style_InstalaesNoOperacionaisCurtoPrazo_22,
                popuplayertitle: 'Instalações Não Operacionais - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisCurtoPrazo_22.png" /> Instalações Não Operacionais - Curto Prazo'
            });
var format_InstalaesNoOperacionaisSituaoAtual_23 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionaisSituaoAtual_23 = format_InstalaesNoOperacionaisSituaoAtual_23.readFeatures(json_InstalaesNoOperacionaisSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionaisSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionaisSituaoAtual_23.addFeatures(features_InstalaesNoOperacionaisSituaoAtual_23);
var lyr_InstalaesNoOperacionaisSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionaisSituaoAtual_23, 
                style: style_InstalaesNoOperacionaisSituaoAtual_23,
                popuplayertitle: 'Instalações Não Operacionais - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionaisSituaoAtual_23.png" /> Instalações Não Operacionais - Situação Atual'
            });
var format_InstalaesRetroporturias_24 = new ol.format.GeoJSON();
var features_InstalaesRetroporturias_24 = format_InstalaesRetroporturias_24.readFeatures(json_InstalaesRetroporturias_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesRetroporturias_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturias_24.addFeatures(features_InstalaesRetroporturias_24);
var lyr_InstalaesRetroporturias_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesRetroporturias_24, 
                style: style_InstalaesRetroporturias_24,
                popuplayertitle: 'Instalações Retroportuárias',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturias_24.png" /> Instalações Retroportuárias'
            });
var format_AcostagemLongoPrazo_25 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_25 = format_AcostagemLongoPrazo_25.readFeatures(json_AcostagemLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_25.addFeatures(features_AcostagemLongoPrazo_25);
var lyr_AcostagemLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_25, 
                style: style_AcostagemLongoPrazo_25,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_25.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemCurtoPrazo_26 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_26 = format_AcostagemCurtoPrazo_26.readFeatures(json_AcostagemCurtoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_26.addFeatures(features_AcostagemCurtoPrazo_26);
var lyr_AcostagemCurtoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_26, 
                style: style_AcostagemCurtoPrazo_26,
                popuplayertitle: 'Acostagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_26.png" /> Acostagem - Curto Prazo'
            });
var format_AcostagemSituaoAtual_27 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_27 = format_AcostagemSituaoAtual_27.readFeatures(json_AcostagemSituaoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_27.addFeatures(features_AcostagemSituaoAtual_27);
var lyr_AcostagemSituaoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_27, 
                style: style_AcostagemSituaoAtual_27,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_27.png" /> Acostagem - Situação Atual'
            });
var format_Armazenagem_28 = new ol.format.GeoJSON();
var features_Armazenagem_28 = format_Armazenagem_28.readFeatures(json_Armazenagem_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Armazenagem_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagem_28.addFeatures(features_Armazenagem_28);
var lyr_Armazenagem_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagem_28, 
                style: style_Armazenagem_28,
                popuplayertitle: 'Armazenagem ',
                interactive: true,
                title: '<img src="styles/legend/Armazenagem_28.png" /> Armazenagem '
            });
var format_reaseInstalaesAlfandegadasdoPorto_29 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPorto_29 = format_reaseInstalaesAlfandegadasdoPorto_29.readFeatures(json_reaseInstalaesAlfandegadasdoPorto_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPorto_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPorto_29.addFeatures(features_reaseInstalaesAlfandegadasdoPorto_29);
var lyr_reaseInstalaesAlfandegadasdoPorto_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPorto_29, 
                style: style_reaseInstalaesAlfandegadasdoPorto_29,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPorto_29.png" /> Áreas e Instalações Alfandegadas do Porto'
            });
var format_reasArrendveisLongoPrazo_30 = new ol.format.GeoJSON();
var features_reasArrendveisLongoPrazo_30 = format_reasArrendveisLongoPrazo_30.readFeatures(json_reasArrendveisLongoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisLongoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisLongoPrazo_30.addFeatures(features_reasArrendveisLongoPrazo_30);
var lyr_reasArrendveisLongoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisLongoPrazo_30, 
                style: style_reasArrendveisLongoPrazo_30,
                popuplayertitle: 'Áreas Arrendáveis - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisLongoPrazo_30.png" /> Áreas Arrendáveis - Longo Prazo'
            });
var format_reasArrendveisMdioPrazo_31 = new ol.format.GeoJSON();
var features_reasArrendveisMdioPrazo_31 = format_reasArrendveisMdioPrazo_31.readFeatures(json_reasArrendveisMdioPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisMdioPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisMdioPrazo_31.addFeatures(features_reasArrendveisMdioPrazo_31);
var lyr_reasArrendveisMdioPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisMdioPrazo_31, 
                style: style_reasArrendveisMdioPrazo_31,
                popuplayertitle: 'Áreas Arrendáveis - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisMdioPrazo_31.png" /> Áreas Arrendáveis - Médio Prazo'
            });
var format_reasArrendveisCurtoPrazo_32 = new ol.format.GeoJSON();
var features_reasArrendveisCurtoPrazo_32 = format_reasArrendveisCurtoPrazo_32.readFeatures(json_reasArrendveisCurtoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisCurtoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisCurtoPrazo_32.addFeatures(features_reasArrendveisCurtoPrazo_32);
var lyr_reasArrendveisCurtoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisCurtoPrazo_32, 
                style: style_reasArrendveisCurtoPrazo_32,
                popuplayertitle: 'Áreas Arrendáveis - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisCurtoPrazo_32.png" /> Áreas Arrendáveis - Curto Prazo'
            });
var format_reasArrendveisSituaoAtual_33 = new ol.format.GeoJSON();
var features_reasArrendveisSituaoAtual_33 = format_reasArrendveisSituaoAtual_33.readFeatures(json_reasArrendveisSituaoAtual_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisSituaoAtual_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisSituaoAtual_33.addFeatures(features_reasArrendveisSituaoAtual_33);
var lyr_reasArrendveisSituaoAtual_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisSituaoAtual_33, 
                style: style_reasArrendveisSituaoAtual_33,
                popuplayertitle: 'Áreas Arrendáveis - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisSituaoAtual_33.png" /> Áreas Arrendáveis - Situação Atual'
            });
var format_reasArrendadasCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasArrendadasCurtoPrazo_34 = format_reasArrendadasCurtoPrazo_34.readFeatures(json_reasArrendadasCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasCurtoPrazo_34.addFeatures(features_reasArrendadasCurtoPrazo_34);
var lyr_reasArrendadasCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasCurtoPrazo_34, 
                style: style_reasArrendadasCurtoPrazo_34,
                popuplayertitle: 'Áreas Arrendadas - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasCurtoPrazo_34.png" /> Áreas Arrendadas - Curto Prazo'
            });
var format_reasArrendadasSituaoAtual_35 = new ol.format.GeoJSON();
var features_reasArrendadasSituaoAtual_35 = format_reasArrendadasSituaoAtual_35.readFeatures(json_reasArrendadasSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadasSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadasSituaoAtual_35.addFeatures(features_reasArrendadasSituaoAtual_35);
var lyr_reasArrendadasSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadasSituaoAtual_35, 
                style: style_reasArrendadasSituaoAtual_35,
                popuplayertitle: 'Áreas Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadasSituaoAtual_35.png" /> Áreas Arrendadas - Situação Atual'
            });
var format_ZoneamentoLongoPrazo_36 = new ol.format.GeoJSON();
var features_ZoneamentoLongoPrazo_36 = format_ZoneamentoLongoPrazo_36.readFeatures(json_ZoneamentoLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLongoPrazo_36.addFeatures(features_ZoneamentoLongoPrazo_36);
var lyr_ZoneamentoLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLongoPrazo_36, 
                style: style_ZoneamentoLongoPrazo_36,
                popuplayertitle: 'Zoneamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoLongoPrazo_36.png" /> Zoneamento - Longo Prazo'
            });
var format_ZoneamentoMdioPrazo_37 = new ol.format.GeoJSON();
var features_ZoneamentoMdioPrazo_37 = format_ZoneamentoMdioPrazo_37.readFeatures(json_ZoneamentoMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoMdioPrazo_37.addFeatures(features_ZoneamentoMdioPrazo_37);
var lyr_ZoneamentoMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoMdioPrazo_37, 
                style: style_ZoneamentoMdioPrazo_37,
                popuplayertitle: 'Zoneamento - MédioPrazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoMdioPrazo_37.png" /> Zoneamento - MédioPrazo'
            });
var format_ZoneamentoCurtoPrazo_38 = new ol.format.GeoJSON();
var features_ZoneamentoCurtoPrazo_38 = format_ZoneamentoCurtoPrazo_38.readFeatures(json_ZoneamentoCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoCurtoPrazo_38.addFeatures(features_ZoneamentoCurtoPrazo_38);
var lyr_ZoneamentoCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoCurtoPrazo_38, 
                style: style_ZoneamentoCurtoPrazo_38,
                popuplayertitle: 'Zoneamento - CurtoPrazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoCurtoPrazo_38.png" /> Zoneamento - CurtoPrazo'
            });
var format_ZoneamentoSituaoAtual_39 = new ol.format.GeoJSON();
var features_ZoneamentoSituaoAtual_39 = format_ZoneamentoSituaoAtual_39.readFeatures(json_ZoneamentoSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoSituaoAtual_39.addFeatures(features_ZoneamentoSituaoAtual_39);
var lyr_ZoneamentoSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoSituaoAtual_39, 
                style: style_ZoneamentoSituaoAtual_39,
                popuplayertitle: 'Zoneamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoSituaoAtual_39.png" /> Zoneamento - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodeImbituba_40 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeImbituba_40 = format_PoligonaldareadoPortoOrganizadodeImbituba_40.readFeatures(json_PoligonaldareadoPortoOrganizadodeImbituba_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeImbituba_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeImbituba_40.addFeatures(features_PoligonaldareadoPortoOrganizadodeImbituba_40);
var lyr_PoligonaldareadoPortoOrganizadodeImbituba_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeImbituba_40, 
                style: style_PoligonaldareadoPortoOrganizadodeImbituba_40,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Imbituba',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeImbituba_40.png" /> Poligonal da Área do Porto Organizado de Imbituba'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeImbituba_40,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLongoPrazo_36,lyr_ZoneamentoMdioPrazo_37,lyr_ZoneamentoCurtoPrazo_38,lyr_ZoneamentoSituaoAtual_39,],
                                fold: 'open',
                                title: 'Zoneamento '});
var group_reasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasArrendadasCurtoPrazo_34,lyr_reasArrendadasSituaoAtual_35,],
                                fold: 'open',
                                title: 'Áreas Arrendadas '});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveisLongoPrazo_30,lyr_reasArrendveisMdioPrazo_31,lyr_reasArrendveisCurtoPrazo_32,lyr_reasArrendveisSituaoAtual_33,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis'});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPorto_29,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_Armazenagem_28,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_25,lyr_AcostagemCurtoPrazo_26,lyr_AcostagemSituaoAtual_27,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_InstalaesRetroporturias = new ol.layer.Group({
                                layers: [lyr_InstalaesRetroporturias_24,],
                                fold: 'open',
                                title: 'Instalações Retroportuárias '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaesNoOperacionaisLongoPrazo_20,lyr_InstalaesNoOperacionaisMdioPrazo_21,lyr_InstalaesNoOperacionaisCurtoPrazo_22,lyr_InstalaesNoOperacionaisSituaoAtual_23,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais '});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosLongoPrazo_17,lyr_AcessosRodoviriosCurtoPrazo_18,lyr_AcessosRodoviriosSituaoAtual_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários'});
var group_AcessosInternosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosInternosRodoviriosMdioPrazo_15,lyr_AcessosInternosRodoviriosSituaoAtual_16,],
                                fold: 'open',
                                title: 'Acessos Internos Rodoviários '});
var group_AcessosFerrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosFerrovirios_14,],
                                fold: 'open',
                                title: 'Acessos Ferroviários '});
var group_AcessosInternosFerrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosInternosFerroviriosCurtoPrazo_12,lyr_AcessosInternosFerroviriosSituaoAtual_13,],
                                fold: 'open',
                                title: 'Acessos Internos Ferroviários '});
var group_AcessosDutovirios = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosMdioPrazo_10,lyr_AcessosDutoviriosSituaoAtual_11,],
                                fold: 'open',
                                title: 'Acessos Dutoviários '});
var group_AcessosHidrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosHidrovirios_9,],
                                fold: 'open',
                                title: 'Acessos Hidroviários '});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcessoMdioPrazo_7,lyr_CanaldeAcessoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Canal de Acesso '});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluo_6,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosPropostos_4,lyr_Fundeadouros_5,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_Equipamentos = new ol.layer.Group({
                                layers: [lyr_Equipamentos_3,],
                                fold: 'open',
                                title: 'Equipamentos '});
var group_ServiosdeApoio = new ol.layer.Group({
                                layers: [lyr_ServiosdeApoio_2,],
                                fold: 'open',
                                title: 'Serviços de Apoio '});
var group_UnidadedeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadedeConservao_1,],
                                fold: 'open',
                                title: 'Unidade de Conservação'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadedeConservao_1.setVisible(false);lyr_ServiosdeApoio_2.setVisible(false);lyr_Equipamentos_3.setVisible(false);lyr_FundeadourosPropostos_4.setVisible(false);lyr_Fundeadouros_5.setVisible(false);lyr_BaciadeEvoluo_6.setVisible(false);lyr_CanaldeAcessoMdioPrazo_7.setVisible(false);lyr_CanaldeAcessoSituaoAtual_8.setVisible(false);lyr_AcessosHidrovirios_9.setVisible(false);lyr_AcessosDutoviriosMdioPrazo_10.setVisible(false);lyr_AcessosDutoviriosSituaoAtual_11.setVisible(false);lyr_AcessosInternosFerroviriosCurtoPrazo_12.setVisible(false);lyr_AcessosInternosFerroviriosSituaoAtual_13.setVisible(false);lyr_AcessosFerrovirios_14.setVisible(false);lyr_AcessosInternosRodoviriosMdioPrazo_15.setVisible(false);lyr_AcessosInternosRodoviriosSituaoAtual_16.setVisible(false);lyr_AcessosRodoviriosLongoPrazo_17.setVisible(false);lyr_AcessosRodoviriosCurtoPrazo_18.setVisible(false);lyr_AcessosRodoviriosSituaoAtual_19.setVisible(false);lyr_InstalaesNoOperacionaisLongoPrazo_20.setVisible(false);lyr_InstalaesNoOperacionaisMdioPrazo_21.setVisible(false);lyr_InstalaesNoOperacionaisCurtoPrazo_22.setVisible(false);lyr_InstalaesNoOperacionaisSituaoAtual_23.setVisible(false);lyr_InstalaesRetroporturias_24.setVisible(false);lyr_AcostagemLongoPrazo_25.setVisible(false);lyr_AcostagemCurtoPrazo_26.setVisible(false);lyr_AcostagemSituaoAtual_27.setVisible(false);lyr_Armazenagem_28.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPorto_29.setVisible(false);lyr_reasArrendveisLongoPrazo_30.setVisible(false);lyr_reasArrendveisMdioPrazo_31.setVisible(false);lyr_reasArrendveisCurtoPrazo_32.setVisible(false);lyr_reasArrendveisSituaoAtual_33.setVisible(false);lyr_reasArrendadasCurtoPrazo_34.setVisible(false);lyr_reasArrendadasSituaoAtual_35.setVisible(false);lyr_ZoneamentoLongoPrazo_36.setVisible(false);lyr_ZoneamentoMdioPrazo_37.setVisible(false);lyr_ZoneamentoCurtoPrazo_38.setVisible(false);lyr_ZoneamentoSituaoAtual_39.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeImbituba_40.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadedeConservao,group_ServiosdeApoio,group_Equipamentos,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosHidrovirios,group_AcessosDutovirios,group_AcessosInternosFerrovirios,group_AcessosFerrovirios,group_AcessosInternosRodovirios,group_AcessosRodovirios,group_InstalaesNoOperacionais,group_InstalaesRetroporturias,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadasdoPorto,group_reasArrendveis,group_reasArrendadas,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadedeConservao_1.set('fieldAliases', {'Name': 'Nome ', 'Decreto': 'Decreto', 'Ano_de_dis': 'Ano de Disponibilização ', 'Plan.Manej': 'Plano de Manejo ', 'Jurisdiç�': 'Jurisdição ', 'Categoria': 'Categoria', 'Fonte': 'Fonte', 'Estado': 'Estado', 'Municipio': 'Município ', 'Ato_Legal': 'Ato Legal ', 'Uso': 'Uso', });
lyr_ServiosdeApoio_2.set('fieldAliases', {'Serviço': 'Serviço Oferecido ', 'Empresa': 'Empresa Fornecedora ', 'Capacidade': 'Capacidade ', });
lyr_Equipamentos_3.set('fieldAliases', {'TipoEquip': 'Tipo de Equipamento', 'FinalEquip': 'Finalidade do Equipamento ', 'OperEquip': 'Operador do Equipamento', 'CapEquip_t': 'Capacidade do Equipamento (t) ', 'DataFabri': 'Data de Fabricação', 'TempUsoAno': 'Tempo de Uso (anos) ', 'Quantidade': 'Quantidade', 'OBS': 'Observação', });
lyr_FundeadourosPropostos_4.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'OBS': 'Observação', });
lyr_Fundeadouros_5.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', 'OBS': 'Observação', });
lyr_BaciadeEvoluo_6.set('fieldAliases', {'Nome': 'Nome', 'Quantidade': 'Quantidade', 'Localizaca': 'Localização ', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametro_m': 'Diâmetro (m) ', });
lyr_CanaldeAcessoMdioPrazo_7.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs': 'Observação', });
lyr_CanaldeAcessoSituaoAtual_8.set('fieldAliases', {'Trecho': 'Trecho', 'Profund_m': 'Profundidade (m) ', 'Comprim_m': 'Comprimento (m) ', 'Largura_m': 'Largura (m) ', 'Diametr_m': 'Diâmetro (m) ', 'Obs.': 'Observação', });
lyr_AcessosHidrovirios_9.set('fieldAliases', {'Nome': 'Nome', 'Tipo_Naveg': 'Tipo de Navegação ', 'Extensa_km': 'Extensão (Km) ', 'Prof_Min_m': 'Profundidade Mínima (m) ', 'Prof_Max_m': 'Profundidade Máxima (m) ', 'Atualizaca': 'Atualização ', });
lyr_AcessosDutoviriosMdioPrazo_10.set('fieldAliases', {'Nome': 'Nome', 'MatTransp': 'Material Transportado', 'Posicao': 'Posição ', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', 'Obs.': 'Observação', });
lyr_AcessosDutoviriosSituaoAtual_11.set('fieldAliases', {'Nome': 'Nome', 'MatTransp': 'Material Transportado', 'Posicao': 'Posição', 'Operacao': 'Operação ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualiza': 'Atualização ', 'Obs.': 'Observação', });
lyr_AcessosInternosFerroviriosCurtoPrazo_12.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosInternosFerroviriosSituaoAtual_13.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosFerrovirios_14.set('fieldAliases', {'Linha': 'Linha', 'Bitola': 'Bitola', 'Concessao': 'Concessão ', 'Descricao': 'Descrição ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'Atualizaca': 'Atualização ', 'Extens_km': 'Extensão (Km) ', 'Obs.': 'Observação', });
lyr_AcessosInternosRodoviriosMdioPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosInternosRodoviriosSituaoAtual_16.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', });
lyr_AcessosRodoviriosLongoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', 'Sigla': 'Sigla', 'PNV': 'PNV (plano nacional da viação) ', 'Jurisdiç�': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessão': 'Concessão', 'Município': 'Município', 'Unid_Feder': 'Unidade de Federação ', 'VDM_Diario': 'VMD Diário ', });
lyr_AcessosRodoviriosCurtoPrazo_18.set('fieldAliases', {'Nome': 'Nome', 'Extensa_km': 'Extensão (Km) ', 'Sigla': 'Sigla', 'PNV': 'PNV (plano nacional da viação) ', 'Jurisdiç�': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessão': 'Concessão', 'Município': 'Município', 'Unid_Feder': 'Unidade de Federação ', 'VDM_Diario': 'VMD Diário ', });
lyr_AcessosRodoviriosSituaoAtual_19.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV_SNV': 'PNV (plano nacional da viação) ', 'Extensa_km': 'Extensão (Km) ', 'Jurisdicao': 'Jurisdição ', 'Classifica': 'Classificação ', 'Concessao': 'Concessão ', 'Municipio': 'Município ', 'UF': 'Unidade de Federação ', 'VMD_Diario': 'VMD Diário ', });
lyr_InstalaesNoOperacionaisLongoPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'Proprietar': 'Proprietário', 'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisMdioPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Proprietar': 'Proprietário', 'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisCurtoPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'Proprietar': 'Proprietário', 'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesNoOperacionaisSituaoAtual_23.set('fieldAliases', {'Nome': 'Nome', 'Proprietar': 'Proprietário', 'TipoInstal': 'Tipo de Instalação ', 'UsoInstala': 'Uso da Instalação ', 'Area_m²': 'Área (m²) ', 'RegimeExpl': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_InstalaesRetroporturias_24.set('fieldAliases', {'TipoDaInst': 'Tipo de Instalação ', 'Proprietar': 'Proprietário', 'Servicos': 'Serviços Oferecidos', 'Produtos': 'Produtos', 'Area_m²': 'Área (m²) ', 'CapArm_m³': 'Capacidade de Armazenagem (m³) ', 'CapEstCam': 'Capacidade dos Estacionamentos de Caminhões ', 'Exploracao': 'Regime de Exploração', 'CapArm_t': 'Capacidade de Armazenagem (t) ', });
lyr_AcostagemLongoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos', 'Calado': 'Calado', 'OBS': 'Observação', });
lyr_AcostagemCurtoPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', 'Calado': 'Calado', 'OBS': 'Observação', });
lyr_AcostagemSituaoAtual_27.set('fieldAliases', {'Nome': 'Nome', 'IdentBerco': 'Identificador do Berço ', 'EstadoCons': 'Estado de Conservação ', 'CaracConst': 'Características Construtivas ', 'Comprim_m': 'Comprimento (m) ', 'Profund_m': 'Profundidade (m) ', 'PrinciProd': 'Principais Produtos ', 'Calado': 'Calado', 'OBS': 'Observação', });
lyr_Armazenagem_28.set('fieldAliases', {'Nome': 'Nome', 'TipoInstal': 'Tipo da Instalação ', 'Capacid_t_': 'Capacidade (t)', 'Area_m²_': 'Área (m²) ', 'Volume_m³': 'Volume (m³) ', 'RegimeExpl': 'Regime de Exploração ', });
lyr_reaseInstalaesAlfandegadasdoPorto_29.set('fieldAliases', {'Companhia': 'Companhia', 'TipoProdut': 'Tipo de Produto ', 'InstrLegal': 'Instrumento Legal ', 'Area_m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasArrendveisLongoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisMdioPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Area_m²': 'Área (m²)', 'Uso': 'Uso', });
lyr_reasArrendveisCurtoPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'Area_m²': 'Área (m²)', 'Uso': 'Uso', });
lyr_reasArrendveisSituaoAtual_33.set('fieldAliases', {'Nome': 'Nome', 'Area_m²': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendadasCurtoPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Terminal': 'Terminal', 'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato', 'ArrenAtual': 'Arrendatário Atual ', 'TipoInstr': 'Tipo Especificado no Instrumento', 'Finalidade': 'Finalidade', 'DataInicio': 'Data de Início do Arrendamento ', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_m²': 'Área (m²) ', });
lyr_reasArrendadasSituaoAtual_35.set('fieldAliases', {'Nome': 'Nome', 'Terminal': 'Terminal', 'Grupo': 'Grupo', 'AutPortuar': 'Autoridade Portuária ', 'NumContra': 'Número do Contrato ', 'ArrenAtual': 'Arrendatário Atual', 'TipoInstr': 'Tipo Especificado no Instrumento ', 'Finalidade': 'Finalidade', 'DataInicio': 'Data de Início do Arrendamento ', 'DataTermin': 'Data de Término do Arrendamento ', 'Area_mÂ²': 'Área (m²) ', });
lyr_ZoneamentoLongoPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²)', 'Operador': 'Operador', });
lyr_ZoneamentoMdioPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_ZoneamentoCurtoPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m�': 'Área (m²) ', 'Operador': 'Operador', });
lyr_ZoneamentoSituaoAtual_39.set('fieldAliases', {'Nome': 'Nome', 'Categoria': 'Categoria', 'Area_m²': 'Área (m²) ', 'Operador': 'Operador', });
lyr_PoligonaldareadoPortoOrganizadodeImbituba_40.set('fieldAliases', {'Name': 'Nome', 'ins.legal': 'Instrumento Legal ', 'área': 'Área (m²) ', 'Tipo': 'Tipo', });
lyr_UnidadedeConservao_1.set('fieldImages', {'Name': 'TextEdit', 'Decreto': 'TextEdit', 'Ano_de_dis': 'DateTime', 'Plan.Manej': 'TextEdit', 'Jurisdiç�': 'TextEdit', 'Categoria': 'TextEdit', 'Fonte': 'TextEdit', 'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Uso': 'TextEdit', });
lyr_ServiosdeApoio_2.set('fieldImages', {'Serviço': 'TextEdit', 'Empresa': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_Equipamentos_3.set('fieldImages', {'TipoEquip': 'TextEdit', 'FinalEquip': 'TextEdit', 'OperEquip': 'TextEdit', 'CapEquip_t': 'TextEdit', 'DataFabri': 'Range', 'TempUsoAno': 'Range', 'Quantidade': 'Range', 'OBS': 'TextEdit', });
lyr_FundeadourosPropostos_4.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Fundeadouros_5.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', 'OBS': 'TextEdit', });
lyr_BaciadeEvoluo_6.set('fieldImages', {'Nome': 'TextEdit', 'Quantidade': 'Range', 'Localizaca': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametro_m': 'TextEdit', });
lyr_CanaldeAcessoMdioPrazo_7.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs': 'TextEdit', });
lyr_CanaldeAcessoSituaoAtual_8.set('fieldImages', {'Trecho': 'TextEdit', 'Profund_m': 'TextEdit', 'Comprim_m': 'TextEdit', 'Largura_m': 'TextEdit', 'Diametr_m': 'TextEdit', 'Obs.': 'TextEdit', });
lyr_AcessosHidrovirios_9.set('fieldImages', {'Nome': 'TextEdit', 'Tipo_Naveg': 'TextEdit', 'Extensa_km': 'TextEdit', 'Prof_Min_m': 'TextEdit', 'Prof_Max_m': 'TextEdit', 'Atualizaca': 'TextEdit', });
lyr_AcessosDutoviriosMdioPrazo_10.set('fieldImages', {'Nome': 'TextEdit', 'MatTransp': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'DateTime', 'Obs.': 'TextEdit', });
lyr_AcessosDutoviriosSituaoAtual_11.set('fieldImages', {'Nome': 'TextEdit', 'MatTransp': 'TextEdit', 'Posicao': 'TextEdit', 'Operacao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualiza': 'DateTime', 'Obs.': 'TextEdit', });
lyr_AcessosInternosFerroviriosCurtoPrazo_12.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosInternosFerroviriosSituaoAtual_13.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosFerrovirios_14.set('fieldImages', {'Linha': 'TextEdit', 'Bitola': 'TextEdit', 'Concessao': 'TextEdit', 'Descricao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'Atualizaca': 'TextEdit', 'Extens_km': 'TextEdit', 'Obs.': 'TextEdit', });
lyr_AcessosInternosRodoviriosMdioPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosInternosRodoviriosSituaoAtual_16.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', });
lyr_AcessosRodoviriosLongoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', 'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'Jurisdiç�': 'TextEdit', 'Classifica': 'TextEdit', 'Concessão': 'TextEdit', 'Município': 'TextEdit', 'Unid_Feder': 'TextEdit', 'VDM_Diario': 'Range', });
lyr_AcessosRodoviriosCurtoPrazo_18.set('fieldImages', {'Nome': 'TextEdit', 'Extensa_km': 'TextEdit', 'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'Jurisdiç�': 'TextEdit', 'Classifica': 'TextEdit', 'Concessão': 'TextEdit', 'Município': 'TextEdit', 'Unid_Feder': 'TextEdit', 'VDM_Diario': 'Range', });
lyr_AcessosRodoviriosSituaoAtual_19.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV_SNV': 'TextEdit', 'Extensa_km': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Classifica': 'TextEdit', 'Concessao': 'TextEdit', 'Municipio': 'TextEdit', 'UF': 'TextEdit', 'VMD_Diario': 'Range', });
lyr_InstalaesNoOperacionaisLongoPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'Proprietar': 'TextEdit', 'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisMdioPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Proprietar': 'TextEdit', 'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisCurtoPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'Proprietar': 'TextEdit', 'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesNoOperacionaisSituaoAtual_23.set('fieldImages', {'Nome': 'TextEdit', 'Proprietar': 'TextEdit', 'TipoInstal': 'TextEdit', 'UsoInstala': 'TextEdit', 'Area_m²': 'TextEdit', 'RegimeExpl': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_InstalaesRetroporturias_24.set('fieldImages', {'TipoDaInst': 'TextEdit', 'Proprietar': 'TextEdit', 'Servicos': 'TextEdit', 'Produtos': 'TextEdit', 'Area_m²': 'TextEdit', 'CapArm_m³': 'TextEdit', 'CapEstCam': 'TextEdit', 'Exploracao': 'TextEdit', 'CapArm_t': 'TextEdit', });
lyr_AcostagemLongoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', 'Calado': 'TextEdit', 'OBS': 'TextEdit', });
lyr_AcostagemCurtoPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', 'Calado': 'TextEdit', 'OBS': 'TextEdit', });
lyr_AcostagemSituaoAtual_27.set('fieldImages', {'Nome': 'TextEdit', 'IdentBerco': 'TextEdit', 'EstadoCons': 'TextEdit', 'CaracConst': 'TextEdit', 'Comprim_m': 'TextEdit', 'Profund_m': 'TextEdit', 'PrinciProd': 'TextEdit', 'Calado': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Armazenagem_28.set('fieldImages', {'Nome': 'TextEdit', 'TipoInstal': 'TextEdit', 'Capacid_t_': 'TextEdit', 'Area_m²_': 'TextEdit', 'Volume_m³': 'TextEdit', 'RegimeExpl': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPorto_29.set('fieldImages', {'Companhia': 'TextEdit', 'TipoProdut': 'TextEdit', 'InstrLegal': 'TextEdit', 'Area_m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasArrendveisLongoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisMdioPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisCurtoPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisSituaoAtual_33.set('fieldImages', {'Nome': 'TextEdit', 'Area_m²': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendadasCurtoPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'Terminal': 'TextEdit', 'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_reasArrendadasSituaoAtual_35.set('fieldImages', {'Nome': 'TextEdit', 'Terminal': 'TextEdit', 'Grupo': 'TextEdit', 'AutPortuar': 'TextEdit', 'NumContra': 'TextEdit', 'ArrenAtual': 'TextEdit', 'TipoInstr': 'TextEdit', 'Finalidade': 'TextEdit', 'DataInicio': 'TextEdit', 'DataTermin': 'TextEdit', 'Area_mÂ²': 'TextEdit', });
lyr_ZoneamentoLongoPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoMdioPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoCurtoPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m�': 'TextEdit', 'Operador': 'TextEdit', });
lyr_ZoneamentoSituaoAtual_39.set('fieldImages', {'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Area_m²': 'TextEdit', 'Operador': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeImbituba_40.set('fieldImages', {'Name': 'TextEdit', 'ins.legal': 'TextEdit', 'área': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_UnidadedeConservao_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Decreto': 'inline label - visible with data', 'Ano_de_dis': 'inline label - visible with data', 'Plan.Manej': 'inline label - visible with data', 'Jurisdiç�': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Ato_Legal': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_ServiosdeApoio_2.set('fieldLabels', {'Serviço': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_Equipamentos_3.set('fieldLabels', {'TipoEquip': 'inline label - visible with data', 'FinalEquip': 'inline label - visible with data', 'OperEquip': 'inline label - visible with data', 'CapEquip_t': 'inline label - visible with data', 'DataFabri': 'inline label - visible with data', 'TempUsoAno': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_FundeadourosPropostos_4.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_Fundeadouros_5.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_BaciadeEvoluo_6.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaca': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametro_m': 'inline label - visible with data', });
lyr_CanaldeAcessoMdioPrazo_7.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_CanaldeAcessoSituaoAtual_8.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Largura_m': 'inline label - visible with data', 'Diametr_m': 'inline label - visible with data', 'Obs.': 'inline label - visible with data', });
lyr_AcessosHidrovirios_9.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Tipo_Naveg': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Prof_Min_m': 'inline label - visible with data', 'Prof_Max_m': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosDutoviriosMdioPrazo_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'MatTransp': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', 'Obs.': 'inline label - visible with data', });
lyr_AcessosDutoviriosSituaoAtual_11.set('fieldLabels', {'Nome': 'inline label - visible with data', 'MatTransp': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operacao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', 'Obs.': 'inline label - visible with data', });
lyr_AcessosInternosFerroviriosCurtoPrazo_12.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosInternosFerroviriosSituaoAtual_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosFerrovirios_14.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Bitola': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', 'Extens_km': 'inline label - visible with data', 'Obs.': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosMdioPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosInternosRodoviriosSituaoAtual_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', });
lyr_AcessosRodoviriosLongoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Jurisdiç�': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessão': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Unid_Feder': 'inline label - visible with data', 'VDM_Diario': 'inline label - visible with data', });
lyr_AcessosRodoviriosCurtoPrazo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Jurisdiç�': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessão': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Unid_Feder': 'inline label - visible with data', 'VDM_Diario': 'inline label - visible with data', });
lyr_AcessosRodoviriosSituaoAtual_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV_SNV': 'inline label - visible with data', 'Extensa_km': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessao': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisLongoPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisMdioPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisCurtoPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesNoOperacionaisSituaoAtual_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'TipoInstal': 'inline label - visible with data', 'UsoInstala': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_InstalaesRetroporturias_24.set('fieldLabels', {'TipoDaInst': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'Servicos': 'inline label - visible with data', 'Produtos': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'CapArm_m³': 'inline label - visible with data', 'CapEstCam': 'inline label - visible with data', 'Exploracao': 'inline label - visible with data', 'CapArm_t': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'IdentBerco': 'inline label - visible with data', 'EstadoCons': 'inline label - visible with data', 'CaracConst': 'inline label - visible with data', 'Comprim_m': 'inline label - visible with data', 'Profund_m': 'inline label - visible with data', 'PrinciProd': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'OBS': 'inline label - visible with data', });
lyr_Armazenagem_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'TipoInstal': 'inline label - visible with data', 'Capacid_t_': 'inline label - visible with data', 'Area_m²_': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'RegimeExpl': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPorto_29.set('fieldLabels', {'Companhia': 'inline label - visible with data', 'TipoProdut': 'inline label - visible with data', 'InstrLegal': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasArrendveisLongoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisMdioPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisCurtoPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisSituaoAtual_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendadasCurtoPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Terminal': 'inline label - visible with data', 'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_reasArrendadasSituaoAtual_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Terminal': 'inline label - visible with data', 'Grupo': 'inline label - visible with data', 'AutPortuar': 'inline label - visible with data', 'NumContra': 'inline label - visible with data', 'ArrenAtual': 'inline label - visible with data', 'TipoInstr': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'DataInicio': 'inline label - visible with data', 'DataTermin': 'inline label - visible with data', 'Area_mÂ²': 'inline label - visible with data', });
lyr_ZoneamentoLongoPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoMdioPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoCurtoPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m�': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_ZoneamentoSituaoAtual_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeImbituba_40.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins.legal': 'inline label - visible with data', 'área': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeImbituba_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});