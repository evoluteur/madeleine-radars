const recipes = [
  {
    title: "Madeleine ardéchoise",
    pc_beurre: 24,
    pc_sucre: 24,
    pc_farine: 24,
    pc_oeuf: 28,
    url: "http://www.marmiton.org/recettes/recette_madeleine-ardechoise_54883.aspx",
  },
  {
    title: "Madeleines parfumées à la fleur d'oranger",
    pc_beurre: 20,
    pc_sucre: 25,
    pc_farine: 28,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-parfumees-a-la-fleur-d-oranger_26579.aspx",
  },
  {
    title: "Madeleine à la banane",
    pc_beurre: 17,
    pc_sucre: 21,
    pc_farine: 34,
    pc_oeuf: 28,
    url: "http://www.marmiton.org/recettes/recette_madeleine-a-la-banane_67426.aspx",
  },
  {
    title: "Madeleines rapides",
    pc_beurre: 21,
    pc_sucre: 25,
    pc_farine: 25,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-rapides_168941.aspx",
  },
  {
    title: "Madeleines choco-coco de Nanie",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-choco-coco-de-nanie_222732.aspx",
  },
  {
    title: "Madeleines au pralin",
    pc_beurre: 14,
    pc_sucre: 0,
    pc_farine: 27,
    pc_oeuf: 59,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-pralin_22040.aspx",
  },
  {
    title: "Madeleines salées aux Tomates séchées, feta et basilic",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-aux-tomates-sechees-feta-et-basilic-5eme-rencontre-marmiton_29271.aspx",
  },
  {
    title: "Madeleines aux pépites de chocolat",
    pc_beurre: 0,
    pc_sucre: 32,
    pc_farine: 47,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-pepites-de-chocolat_26241.aspx",
  },
  {
    title: "Madeleines à la vanille",
    pc_beurre: 21,
    pc_sucre: 25,
    pc_farine: 25,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-vanille_222610.aspx",
  },
  {
    title: "Madeleines saveur amande",
    pc_beurre: 27,
    pc_sucre: 20,
    pc_farine: 24,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-saveur-amande_90080.aspx",
  },
  {
    title: "Minis madeleines apéritives ricotta-tomate-basilic",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 100,
    pc_oeuf: 0,
    url: "http://www.marmiton.org/recettes/recette_minis-madeleines-aperitives-ricotta-tomate-basilic_167884.aspx",
  },
  {
    title: "Madeleines moelleuses pépites de chocolat et écorces d'oranges",
    pc_beurre: 18,
    pc_sucre: 18,
    pc_farine: 32,
    pc_oeuf: 32,
    url: "http://www.marmiton.org/recettes/recette_madeleines-moelleuses-pepites-de-chocolat-et-ecorces-d-oranges_337071.aspx",
  },
  {
    title: "Madeleines mignardises",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-mignardises_15800.aspx",
  },
  {
    title: "Madeleines aux pepites de chocolat de Cyril",
    pc_beurre: 25,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 19,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-pepites-de-chocolat-de-cyril_321170.aspx",
  },
  {
    title: "Madeleines salées courgette chorizo",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-courgette-chorizo_92893.aspx",
  },
  {
    title: "Recette moelleuse de madeleines (base raisins)",
    pc_beurre: 25,
    pc_sucre: 25,
    pc_farine: 25,
    pc_oeuf: 25,
    url: "http://www.marmiton.org/recettes/recette_recette-moelleuse-de-madeleines-base-raisins_67427.aspx",
  },
  {
    title: "Madeleines amandes ou chocolat",
    pc_beurre: 30,
    pc_sucre: 25,
    pc_farine: 17,
    pc_oeuf: 28,
    url: "http://www.marmiton.org/recettes/recette_madeleines-amandes-ou-chocolat_169180.aspx",
  },
  {
    title: "Madeleines chorizo poivrons",
    pc_beurre: 23,
    pc_sucre: 0,
    pc_farine: 36,
    pc_oeuf: 41,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chorizo-poivrons_343206.aspx",
  },
  {
    title: "Madeleines au muscat et à l'huile d'olive",
    pc_beurre: 0,
    pc_sucre: 31,
    pc_farine: 26,
    pc_oeuf: 43,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-muscat-et-a-l-huile-d-olive_28680.aspx",
  },
  {
    title: "Madeleines au chèvre",
    pc_beurre: 25,
    pc_sucre: 0,
    pc_farine: 31,
    pc_oeuf: 44,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chevre_40701.aspx",
  },
  {
    title: "Madeleines au thon",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 38,
    pc_oeuf: 62,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-thon_314525.aspx",
  },
  {
    title: "Madeleines au pralin et son glaçage rose",
    pc_beurre: 13,
    pc_sucre: 18,
    pc_farine: 39,
    pc_oeuf: 30,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-pralin-et-son-glacage-rose_308101.aspx",
  },
  {
    title: "Madeleines aux raisins secs",
    pc_beurre: 16,
    pc_sucre: 33,
    pc_farine: 20,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-raisins-secs_35763.aspx",
  },
  {
    title: "Madeleine marbrées",
    pc_beurre: 19,
    pc_sucre: 22,
    pc_farine: 24,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleine-marbrees_342847.aspx",
  },
  {
    title: "Madeleines salées jambon et roquefort",
    pc_beurre: 15,
    pc_sucre: 0,
    pc_farine: 34,
    pc_oeuf: 51,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-jambon-et-roquefort_227823.aspx",
  },
  {
    title: "Madeleines chorizo-tomate",
    pc_beurre: 6,
    pc_sucre: 0,
    pc_farine: 41,
    pc_oeuf: 53,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chorizo-tomate_321603.aspx",
  },
  {
    title: "Madeleines choco / miel",
    pc_beurre: 19,
    pc_sucre: 0,
    pc_farine: 43,
    pc_oeuf: 38,
    url: "http://www.marmiton.org/recettes/recette_madeleines-choco-miel_344056.aspx",
  },
  {
    title: "Madeleines à la pistache",
    pc_beurre: 26,
    pc_sucre: 26,
    pc_farine: 5,
    pc_oeuf: 43,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-pistache_84998.aspx",
  },
  {
    title: "Madeleines jambon-olives",
    pc_beurre: 37,
    pc_sucre: 0,
    pc_farine: 41,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines-jambon-olives_224259.aspx",
  },
  {
    title: "Madeleines moelleuses au beurre",
    pc_beurre: 22,
    pc_sucre: 23,
    pc_farine: 26,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-moelleuses-au-beurre_305489.aspx",
  },
  {
    title: "Madeleines faciles",
    pc_beurre: 13,
    pc_sucre: 26,
    pc_farine: 26,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-faciles_13204.aspx",
  },
  {
    title: "Madeleines aux Carambars",
    pc_beurre: 22,
    pc_sucre: 24,
    pc_farine: 13,
    pc_oeuf: 41,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-carambars_59356.aspx",
  },
  {
    title: "Madeleines au miel de Julia",
    pc_beurre: 10,
    pc_sucre: 25,
    pc_farine: 30,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-miel-de-julia_39448.aspx",
  },
  {
    title: "Madeleines aux pommes",
    pc_beurre: 28,
    pc_sucre: 3,
    pc_farine: 28,
    pc_oeuf: 41,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-pommes_59173.aspx",
  },
  {
    title: "Madeleines au miel, citron et fleur d'oranger",
    pc_beurre: 20,
    pc_sucre: 11,
    pc_farine: 33,
    pc_oeuf: 36,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-miel-citron-et-fleur-d-oranger_65517.aspx",
  },
  {
    title: "Madeleines gingembre confit-cardamome faciles!!!",
    pc_beurre: 19,
    pc_sucre: 22,
    pc_farine: 24,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-gingembre-confit-cardamome-delicieusement-faciles_81628.aspx",
  },
  {
    title: "Madeleines au coeur de nutella",
    pc_beurre: 22,
    pc_sucre: 23,
    pc_farine: 26,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-coeur-de-nutella_68476.aspx",
  },
  {
    title: "Madeleines des p'tites faims",
    pc_beurre: 14,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 30,
    url: "http://www.marmiton.org/recettes/recette_madeleines-des-p-tites-faims_36237.aspx",
  },
  {
    title: "Madeleines au Monbazillac",
    pc_beurre: 0,
    pc_sucre: 23,
    pc_farine: 50,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-monbazillac_173388.aspx",
  },
  {
    title: "Madeleines de Laetitia",
    pc_beurre: 21,
    pc_sucre: 24,
    pc_farine: 26,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-de-laetitia_94139.aspx",
  },
  {
    title: "Madeleine à la vanille",
    pc_beurre: 26,
    pc_sucre: 26,
    pc_farine: 26,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleine-a-la-vanille_231750.aspx",
  },
  {
    title: "Madeleines à l'ananas",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-l-ananas_166987.aspx",
  },
  {
    title: "Madeleines pommes pralines",
    pc_beurre: 18,
    pc_sucre: 14,
    pc_farine: 30,
    pc_oeuf: 38,
    url: "http://www.marmiton.org/recettes/recette_madeleines-pommes-pralines_70419.aspx",
  },
  {
    title: "Madeleines aux lardons et camembert",
    pc_beurre: 15,
    pc_sucre: 0,
    pc_farine: 34,
    pc_oeuf: 51,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-lardons-et-camembert_37985.aspx",
  },
  {
    title: "Madeleines au poulet et curry avec les restes de poulet rôti",
    pc_beurre: 36,
    pc_sucre: 0,
    pc_farine: 38,
    pc_oeuf: 26,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-poulet-et-curry-avec-les-restes-de-poulet-roti_321285.aspx",
  },
  {
    title: "Madeleines salées faciles et rapides",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 52,
    pc_oeuf: 48,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-faciles-et-rapides_37866.aspx",
  },
  {
    title: "Les madeleines incontournables",
    pc_beurre: 28,
    pc_sucre: 17,
    pc_farine: 25,
    pc_oeuf: 30,
    url: "http://www.marmiton.org/recettes/recette_les-madeleines-incontournables_339718.aspx",
  },
  {
    title: "Madeleines de pommes de terre",
    pc_beurre: 42,
    pc_sucre: 0,
    pc_farine: 0,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-de-pommes-de-terre_232645.aspx",
  },
  {
    title: "Petites madeleines au colin et sommités d'aneth",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 31,
    pc_oeuf: 69,
    url: "http://www.marmiton.org/recettes/recette_petites-madeleines-au-colin-et-sommites-d-aneth_229786.aspx",
  },
  {
    title: "Madeleines espagnoles (magdelenas)",
    pc_beurre: 0,
    pc_sucre: 31,
    pc_farine: 42,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-espagnoles-magdelenas_343777.aspx",
  },
  {
    title: "Madeleines printanières",
    pc_beurre: 21,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 23,
    url: "http://www.marmiton.org/recettes/recette_madeleines-printanieres_29206.aspx",
  },
  {
    title: "Mini madeleines thon - pickles de citron vert",
    pc_beurre: 30,
    pc_sucre: 0,
    pc_farine: 30,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_mini-madeleines-thon-pickles-de-citron-vert-rencontre-de-sceau_52922.aspx",
  },
  {
    title: "Madeleines de foo",
    pc_beurre: 26,
    pc_sucre: 26,
    pc_farine: 12,
    pc_oeuf: 36,
    url: "http://www.marmiton.org/recettes/recette_madeleines-de-foo_85297.aspx",
  },
  {
    title: "Madeleines au Piment d'Espelette",
    pc_beurre: 22,
    pc_sucre: 22,
    pc_farine: 22,
    pc_oeuf: 34,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-piment-d-espelette_73959.aspx",
  },
  {
    title: "Madeleines à la fleur d'oranger et aux zestes de citron",
    pc_beurre: 24,
    pc_sucre: 11,
    pc_farine: 24,
    pc_oeuf: 41,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-fleur-d-oranger-et-aux-zestes-de-citron_63733.aspx",
  },
  {
    title: "Les madeleines d'HeaVi",
    pc_beurre: 14,
    pc_sucre: 25,
    pc_farine: 30,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_les-madeleines-d-heavi_168133.aspx",
  },
  {
    title: "Madeleines au Ricoré et amandes effilées",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 23,
    pc_oeuf: 26,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-ricore-et-amandes-effilees_220756.aspx",
  },
  {
    title: "Madeleines fleur d'oranger pépites de chocolat",
    pc_beurre: 27,
    pc_sucre: 27,
    pc_farine: 27,
    pc_oeuf: 19,
    url: "http://www.marmiton.org/recettes/recette_madeleines-fleur-d-oranger-pepites-de-chocolat_57188.aspx",
  },
  {
    title: "Madeleines au jambon et au boursin",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 41,
    pc_oeuf: 59,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-jambon-et-au-boursin_67220.aspx",
  },
  {
    title: "Madeleines au beurre de cacahuètes",
    pc_beurre: 0,
    pc_sucre: 29,
    pc_farine: 34,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-beurre-de-cacahuetes_345552.aspx",
  },
  {
    title: "Madeleines beurre d'érable",
    pc_beurre: 10,
    pc_sucre: 23,
    pc_farine: 32,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-beurre-d-erable_230292.aspx",
  },
  {
    title: "Madeleines au chocolat de Méné",
    pc_beurre: 25,
    pc_sucre: 25,
    pc_farine: 10,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chocolat-de-mene_335971.aspx",
  },
  {
    title: "Bollos (madeleines espagnoles)",
    pc_beurre: 0,
    pc_sucre: 32,
    pc_farine: 29,
    pc_oeuf: 39,
    url: "http://www.marmiton.org/recettes/recette_bollos-madeleines-espagnoles_45966.aspx",
  },
  {
    title: "Madeleines à l'orange et au chocolat",
    pc_beurre: 21,
    pc_sucre: 24,
    pc_farine: 29,
    pc_oeuf: 26,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-l-orange-et-au-chocolat_308990.aspx",
  },
  {
    title: "Madeleines aux fraises",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-fraises_94133.aspx",
  },
  {
    title: "Mini-madeleines riches en chocolat",
    pc_beurre: 11,
    pc_sucre: 19,
    pc_farine: 30,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_mini-madeleines-riches-en-chocolat_39505.aspx",
  },
  {
    title: "Madeleines aux pignons glaçage chocolat",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-pignons-glacage-chocolat_37154.aspx",
  },
  {
    title: "Madeleines chocolatées très facile",
    pc_beurre: 19,
    pc_sucre: 29,
    pc_farine: 19,
    pc_oeuf: 33,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chocolatees-tres-facile_19795.aspx",
  },
  {
    title: "Madeleines salées au camembert et au chorizo",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-au-camembert-et-au-chorizo-5eme-rencontre-marmiton_29272.aspx",
  },
  {
    title: "Madeleines au citron faciles",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-citron-faciles_341916.aspx",
  },
  {
    title: "Madeleines aux amandes et fleur d'oranger",
    pc_beurre: 26,
    pc_sucre: 20,
    pc_farine: 20,
    pc_oeuf: 34,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-amandes-et-fleur-d-oranger_254101.aspx",
  },
  {
    title: "Madeleines fruitées",
    pc_beurre: 30,
    pc_sucre: 0,
    pc_farine: 30,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-fruitees_31259.aspx",
  },
  {
    title: "Madeleines coques 3 chocolats",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-coques-3-chocolats_345737.aspx",
  },
  {
    title: "Madeleines",
    pc_beurre: 26,
    pc_sucre: 21,
    pc_farine: 31,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines_18544.aspx",
  },
  {
    title: "Madeleines raisin et chocolat",
    pc_beurre: 26,
    pc_sucre: 31,
    pc_farine: 21,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines-raisin-et-chocolat_13830.aspx",
  },
  {
    title: "Madeleines parfumées à la clémentine",
    pc_beurre: 24,
    pc_sucre: 18,
    pc_farine: 24,
    pc_oeuf: 34,
    url: "http://www.marmiton.org/recettes/recette_madeleines-parfumees-a-la-clementine_232975.aspx",
  },
  {
    title: "Madeleines chocolat orande de Nils",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chocolat-orande-de-nils_220783.aspx",
  },
  {
    title: "Madeleines à l'indienne (curry crevette)",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-l-indienne-curry-crevette_42328.aspx",
  },
  {
    title: "Madeleines choco-mandarine",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-choco-mandarine_105718.aspx",
  },
  {
    title: "Madeleines parfumées",
    pc_beurre: 26,
    pc_sucre: 26,
    pc_farine: 26,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines-parfumees_20477.aspx",
  },
  {
    title: "Madeleines au citron vert et à la menthe",
    pc_beurre: 27,
    pc_sucre: 14,
    pc_farine: 28,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-citron-vert-et-a-la-menthe_228983.aspx",
  },
  {
    title: "Madeleines chocolat et caramel au beurre salé",
    pc_beurre: 0,
    pc_sucre: 27,
    pc_farine: 27,
    pc_oeuf: 46,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chocolat-et-caramel-au-beurre-sale_253808.aspx",
  },
  {
    title: "Madeleine vanille chocolat ou citron chocolat",
    pc_beurre: 21,
    pc_sucre: 21,
    pc_farine: 21,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_madeleine-vanille-chocolat-ou-citron-chocolat_51588.aspx",
  },
  {
    title: "Madeleines au chocolat sans lait",
    pc_beurre: 4,
    pc_sucre: 37,
    pc_farine: 19,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chocolat-sans-lait_322247.aspx",
  },
  {
    title: "Madeleines à la courge",
    pc_beurre: 21,
    pc_sucre: 18,
    pc_farine: 42,
    pc_oeuf: 19,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-courge_219082.aspx",
  },
  {
    title: "Madeleines au citron végétaliennes",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 100,
    pc_oeuf: 0,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-citron-vegetaliennes_173722.aspx",
  },
  {
    title: "Madeleines aux lardons et au roquefort",
    pc_beurre: 28,
    pc_sucre: 0,
    pc_farine: 34,
    pc_oeuf: 38,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-lardons-et-au-roquefort_212550.aspx",
  },
  {
    title: "Madeleines noisettes chocolat",
    pc_beurre: 14,
    pc_sucre: 26,
    pc_farine: 22,
    pc_oeuf: 38,
    url: "http://www.marmiton.org/recettes/recette_madeleines-noisettes-chocolat_166308.aspx",
  },
  {
    title: "Madeleines à la rose",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-rose_90658.aspx",
  },
  {
    title: "Madeleines aux baies de sureau",
    pc_beurre: 0,
    pc_sucre: 39,
    pc_farine: 39,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-baies-de-sureau_166855.aspx",
  },
  {
    title: "Madeleines au citron",
    pc_beurre: 19,
    pc_sucre: 22,
    pc_farine: 24,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-citron_44512.aspx",
  },
  {
    title: "Madeleines aux cuberdons",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-cuberdons_254231.aspx",
  },
  {
    title: "Madeleines tout chocolat",
    pc_beurre: 19,
    pc_sucre: 22,
    pc_farine: 24,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-tout-chocolat_165075.aspx",
  },
  {
    title: "Madeleines chocolat- noix de coco",
    pc_beurre: 22,
    pc_sucre: 22,
    pc_farine: 33,
    pc_oeuf: 23,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chocolat-noix-de-coco_229539.aspx",
  },
  {
    title: "Madeleine au thé Matcha (light)",
    pc_beurre: 26,
    pc_sucre: 19,
    pc_farine: 16,
    pc_oeuf: 39,
    url: "http://www.marmiton.org/recettes/recette_madeleine-au-the-matcha-light_339915.aspx",
  },
  {
    title: "Madeleines ultra simples",
    pc_beurre: 26,
    pc_sucre: 26,
    pc_farine: 26,
    pc_oeuf: 22,
    url: "http://www.marmiton.org/recettes/recette_madeleines-ultra-simples_57106.aspx",
  },
  {
    title: "Madeleines au miel facile",
    pc_beurre: 11,
    pc_sucre: 18,
    pc_farine: 24,
    pc_oeuf: 47,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-miel-facile_21306.aspx",
  },
  {
    title: "Madeleines à la vanille",
    pc_beurre: 20,
    pc_sucre: 20,
    pc_farine: 26,
    pc_oeuf: 34,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-vanille_231632.aspx",
  },
  {
    title: "Madeleines bio framboises chocolat",
    pc_beurre: 22,
    pc_sucre: 25,
    pc_farine: 12,
    pc_oeuf: 41,
    url: "http://www.marmiton.org/recettes/recette_madeleines-bio-framboises-chocolat_63833.aspx",
  },
  {
    title: "Madeleines oignons bacon",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 48,
    pc_oeuf: 52,
    url: "http://www.marmiton.org/recettes/recette_madeleines-oignons-bacon_312187.aspx",
  },
  {
    title: "Madeleines à la vanille sans sucre",
    pc_beurre: 40,
    pc_sucre: 0,
    pc_farine: 29,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-vanille-sans-sucre_231907.aspx",
  },
  {
    title: "Madeleines au chocolat blanc",
    pc_beurre: 0,
    pc_sucre: 24,
    pc_farine: 24,
    pc_oeuf: 52,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chocolat-blanc_164587.aspx",
  },
  {
    title: "Chocorangettes (madeleines à l'orange glacées au chocolat)",
    pc_beurre: 22,
    pc_sucre: 34,
    pc_farine: 19,
    pc_oeuf: 25,
    url: "http://www.marmiton.org/recettes/recette_chocorangettes-madeleines-a-l-orange-glacees-au-chocolat_23908.aspx",
  },
  {
    title: "Madeleines aux cranberries/amandes",
    pc_beurre: 29,
    pc_sucre: 24,
    pc_farine: 47,
    pc_oeuf: 0,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-cranberries-amandes_227872.aspx",
  },
  {
    title: "Madeleines soufflées à la brandade",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-soufflees-a-la-brandade_40166.aspx",
  },
  {
    title: "Madeleine au miel et poudre d'amande",
    pc_beurre: 20,
    pc_sucre: 25,
    pc_farine: 10,
    pc_oeuf: 45,
    url: "http://www.marmiton.org/recettes/recette_madeleine-au-miel-et-poudre-d-amande_336823.aspx",
  },
  {
    title: "Madeleines de ririne",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleines-de-ririne_81777.aspx",
  },
  {
    title: "Madeleines marbrées aux pépites de chocolat",
    pc_beurre: 12,
    pc_sucre: 12,
    pc_farine: 25,
    pc_oeuf: 51,
    url: "http://www.marmiton.org/recettes/recette_madeleines-marbrees-aux-pepites-de-chocolat_53559.aspx",
  },
  {
    title: "Madeleines faciles",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-faciles_17700.aspx",
  },
  {
    title: "Madeleines à la pâte d'amandes",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-pate-d-amandes_27596.aspx",
  },
  {
    title: "Délice de madeleines natures, hummmm",
    pc_beurre: 21,
    pc_sucre: 21,
    pc_farine: 21,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_delice-de-madeleines-natures-hummmm_73168.aspx",
  },
  {
    title: "Madeleines aux lardons et au fromage à raclette",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 65,
    pc_oeuf: 35,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-lardons-et-au-fromage-a-raclette_49343.aspx",
  },
  {
    title: "Madeleines moelleuses à la canelle",
    pc_beurre: 22,
    pc_sucre: 19,
    pc_farine: 19,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-moelleuses-a-la-canelle_70153.aspx",
  },
  {
    title: "Madeleines au chocolat au lait",
    pc_beurre: 29,
    pc_sucre: 29,
    pc_farine: 11,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chocolat-au-lait_219604.aspx",
  },
  {
    title: "Madeleines au roquefort",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 48,
    pc_oeuf: 52,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-roquefort_304923.aspx",
  },
  {
    title: "Madeleine à la crème de noisette",
    pc_beurre: 0,
    pc_sucre: 35,
    pc_farine: 35,
    pc_oeuf: 30,
    url: "http://www.marmiton.org/recettes/recette_madeleine-a-la-creme-de-noisette_308170.aspx",
  },
  {
    title: "Madeleines de grand maman au rhum",
    pc_beurre: 15,
    pc_sucre: 30,
    pc_farine: 30,
    pc_oeuf: 25,
    url: "http://www.marmiton.org/recettes/recette_madeleines-de-grand-maman-au-rhum_84884.aspx",
  },
  {
    title: "Madeleines au miel du Chef LouLou",
    pc_beurre: 28,
    pc_sucre: 20,
    pc_farine: 31,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-miel-du-chef-loulou_69849.aspx",
  },
  {
    title: "Madeleines au thon et à la tomate",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 0,
    pc_oeuf: 100,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-thon-et-a-la-tomate_64046.aspx",
  },
  {
    title: "Madeleine tendre, coeur de chocolat",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 28,
    pc_oeuf: 21,
    url: "http://www.marmiton.org/recettes/recette_madeleine-tendre-coeur-de-chocolat_224388.aspx",
  },
  {
    title: "Madeleines au miel",
    pc_beurre: 22,
    pc_sucre: 23,
    pc_farine: 26,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-miel_19756.aspx",
  },
  {
    title: "Magdalenas  (madeleines espagnoles)",
    pc_beurre: 0,
    pc_sucre: 32,
    pc_farine: 39,
    pc_oeuf: 29,
    url: "http://www.marmiton.org/recettes/recette_magdalenas-madeleines-espagnoles_45720.aspx",
  },
  {
    title: "Madeleines aux amandes et miel d'acacia",
    pc_beurre: 25,
    pc_sucre: 25,
    pc_farine: 10,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-amandes-et-miel-d-acacia_37547.aspx",
  },
  {
    title: "Madeleines",
    pc_beurre: 25,
    pc_sucre: 12,
    pc_farine: 30,
    pc_oeuf: 33,
    url: "http://www.marmiton.org/recettes/recette_madeleines_336341.aspx",
  },
  {
    title: "Madeleines au beurre salé",
    pc_beurre: 25,
    pc_sucre: 17,
    pc_farine: 21,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-beurre-sale_343580.aspx",
  },
  {
    title: "Madeleines au sirop",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 33,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-sirop_347094.aspx",
  },
  {
    title: "Madeleines cannelle et gingembre",
    pc_beurre: 23,
    pc_sucre: 28,
    pc_farine: 29,
    pc_oeuf: 20,
    url: "http://www.marmiton.org/recettes/recette_madeleines-cannelle-et-gingembre_52608.aspx",
  },
  {
    title: "Madeleines aux fruits confits",
    pc_beurre: 24,
    pc_sucre: 30,
    pc_farine: 16,
    pc_oeuf: 30,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-fruits-confits_231354.aspx",
  },
  {
    title: "Madeleines à ce qu'on veut !!",
    pc_beurre: 0,
    pc_sucre: 6,
    pc_farine: 45,
    pc_oeuf: 49,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-ce-qu-on-veut_32457.aspx",
  },
  {
    title: "Madeleines aux M&M's",
    pc_beurre: 25,
    pc_sucre: 23,
    pc_farine: 25,
    pc_oeuf: 27,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-m-m-s_308200.aspx",
  },
  {
    title: "Madeleines salées au pesto et pignons de pin",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 42,
    pc_oeuf: 58,
    url: "http://www.marmiton.org/recettes/recette_madeleines-salees-au-pesto-et-pignons-de-pin-5eme-rencontre-marmiton_29270.aspx",
  },
  {
    title: "Madeleines super faciles",
    pc_beurre: 21,
    pc_sucre: 21,
    pc_farine: 21,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_madeleines-super-faciles_16285.aspx",
  },
  {
    title: "Madeleines et ses variantes",
    pc_beurre: 21,
    pc_sucre: 21,
    pc_farine: 21,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_madeleines-et-ses-variantes_310549.aspx",
  },
  {
    title: "Madeleine a la pêche et poudre de noix de coco",
    pc_beurre: 26,
    pc_sucre: 21,
    pc_farine: 29,
    pc_oeuf: 24,
    url: "http://www.marmiton.org/recettes/recette_madeleine-a-la-peche-et-poudre-de-noix-de-coco_229937.aspx",
  },
  {
    title: "Madeleine citron-chocolat",
    pc_beurre: 22,
    pc_sucre: 26,
    pc_farine: 24,
    pc_oeuf: 28,
    url: "http://www.marmiton.org/recettes/recette_madeleine-citron-chocolat_318770.aspx",
  },
  {
    title: "Madeleines chocolat blanc",
    pc_beurre: 23,
    pc_sucre: 23,
    pc_farine: 23,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-chocolat-blanc_201328.aspx",
  },
  {
    title: "Madeleines sans levure avec ou sans Nutella",
    pc_beurre: 16,
    pc_sucre: 24,
    pc_farine: 24,
    pc_oeuf: 36,
    url: "http://www.marmiton.org/recettes/recette_madeleines-sans-levure-avec-ou-sans-nutella_340729.aspx",
  },
  {
    title: "Les madeleines à la soubressade de maman",
    pc_beurre: 26,
    pc_sucre: 0,
    pc_farine: 37,
    pc_oeuf: 37,
    url: "http://www.marmiton.org/recettes/recette_les-madeleines-a-la-soubressade-de-maman_345301.aspx",
  },
  {
    title: "Mes madeleines au citron",
    pc_beurre: 11,
    pc_sucre: 34,
    pc_farine: 24,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_mes-madeleines-au-citron_168200.aspx",
  },
  {
    title: "Madeleines au chocolat et à la vanille",
    pc_beurre: 14,
    pc_sucre: 24,
    pc_farine: 31,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-au-chocolat-et-a-la-vanille_220396.aspx",
  },
  {
    title: "Madeleines à la violette",
    pc_beurre: 15,
    pc_sucre: 24,
    pc_farine: 29,
    pc_oeuf: 32,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-violette_82654.aspx",
  },
  {
    title: "Madeleines vanillées au miel",
    pc_beurre: 24,
    pc_sucre: 12,
    pc_farine: 24,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-vanillees-au-miel_93604.aspx",
  },
  {
    title: "Madeleine au chocolat",
    pc_beurre: 36,
    pc_sucre: 24,
    pc_farine: 0,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleine-au-chocolat_35095.aspx",
  },
  {
    title: "Madeleine au chèvre et au miel",
    pc_beurre: 0,
    pc_sucre: 0,
    pc_farine: 35,
    pc_oeuf: 65,
    url: "http://www.marmiton.org/recettes/recette_madeleine-au-chevre-et-au-miel_223896.aspx",
  },
  {
    title: "Madeleines miel-citron-gingembre",
    pc_beurre: 23,
    pc_sucre: 20,
    pc_farine: 26,
    pc_oeuf: 31,
    url: "http://www.marmiton.org/recettes/recette_madeleines-miel-citron-gingembre_319595.aspx",
  },
  {
    title: "Madeleines aux framboises",
    pc_beurre: 21,
    pc_sucre: 22,
    pc_farine: 29,
    pc_oeuf: 28,
    url: "http://www.marmiton.org/recettes/recette_madeleines-aux-framboises_91368.aspx",
  },
  {
    title: "Madeleines à la farine de noisette et sa coque en chocolat",
    pc_beurre: 24,
    pc_sucre: 12,
    pc_farine: 24,
    pc_oeuf: 40,
    url: "http://www.marmiton.org/recettes/recette_madeleines-a-la-farine-de-noisette-et-sa-coque-en-chocolat_315252.aspx",
  },
];
