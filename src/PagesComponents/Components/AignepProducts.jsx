import React, { useState } from 'react'
import ImageLazyLoading from './ImageLazyLoading';
import Offcanvas from 'react-bootstrap/Offcanvas';

function AignepProducts() {
    const [currentData, SetCurrentData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true);
        SetCurrentData(e);
    }

    const Data = [
        {
            name: "Conexões e Acessórios",
            small: "Automáticas, push-in, compressão, conexões funcionais, adaptadores, válvulas de esfera, mangueiras e tubos para fluidos e ar comprimido",
            image: "https://www.aignep.com/wp-content/uploads/2022/07/connessioni-600x400.jpg",
            list: [
                {
                    name: "CONEXÃO PUSH-IN", 
                    links: [
                        {
                            name: "Conexões Push-In com Anilha de Liberação Vermelha Série 50000 VERMELHA ",
                            file: "https://b2b.aignep.com/content/download/222711/61292963/file/50000%20ROSSA.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-50000-rossa/60038216-295-ita-IT/Serie-50000-ROSSA-fullWidthMobile.jpg"
                        },
                        {
                            name: "Conexões Push-In com Anilha de Liberação Preto  Série 50000 PRETO ",
                            file: "https://b2b.aignep.com/content/download/222712/61292965/file/50000%20NERA.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-50000-nera/60037161-302-ita-IT/50000N-METRIC-Series_fullWidthMobile.jpg"
                        },
                        {
                            name: " Conexões Push-In em Tecnopolímero  Série 55000",
                            file: "https://b2b.aignep.com/content/download/222713/61292967/file/55000%20-%2056000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-55000/60039271-443-ita-IT/55000-METRIC-Series_fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 56000  Conexões Push-In em Tecnopolímero MINI",
                            file: "https://b2b.aignep.com/content/download/222714/61292969/file/55000%20-%2056000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-56000/60122974-113-ita-IT/56000-METRIC-Series-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 57000  Conexões Push-In com Anilha Metálica",
                            file: "https://b2b.aignep.com/content/download/222715/61292971/file/57000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-57000/60039534-295-ita-IT/57000-METRIC-Series_fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 40000V   Conexões Metálicas com Vedações em FKM",
                            file: "https://b2b.aignep.com/content/download/222716/61292973/file/40000V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-40000v/59954620-326-ita-IT/Serie-40000V-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 53000  Conexões Automáticas em PPSU CW510L",
                            file: "https://b2b.aignep.com/content/download/226442/66520577/file/53000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-53000/66519388-11-ita-IT/Serie-53000-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 53000X Conexões Automáticas em PPSU INOX316L",
                            file: "https://b2b.aignep.com/content/download/226483/66545395/file/53000X.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-53000x/66544220-8-ita-IT/Serie-53000X-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 57000 Conexões Push-In com Anilha Metálica",
                            file: "https://b2b.aignep.com/content/download/222715/61292971/file/57000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-57000/60039534-295-ita-IT/57000-METRIC-Series_fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 40000V    Conexões Metálicas com Vedações em FKM",
                            file: "https://b2b.aignep.com/content/download/222716/61292973/file/40000V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-40000v/59954620-326-ita-IT/Serie-40000V-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 53000  Conexões Automáticas em PPSU CW510L",
                            file: "https://b2b.aignep.com/content/download/226442/66520577/file/53000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-53000/66519388-11-ita-IT/Serie-53000-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 53000X Conexões Automáticas em PPSU INOX316L",
                            file: "https://b2b.aignep.com/content/download/226483/66545395/file/53000X.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-53000x/66544220-8-ita-IT/Serie-53000X-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 59000  Conexões Automáticas Para Alimentos e Água Potável",
                            file: "https://b2b.aignep.com/content/download/226391/66466689/file/59000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-59000/66431936-160-ita-IT/Serie-59000-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 70000 Conexões Push-In para Indústria Alimentícia",
                            file: "https://b2b.aignep.com/content/download/226392/66466691/file/70000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-70000/66449336-113-ita-IT/Serie-70000-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 60000 - INOX Conexões Push-In em Aço Inox",
                            file: "https://b2b.aignep.com/content/download/222719/61292979/file/60000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-60000-inox/60149293-155-ita-IT/60000-Series-Stainless-Steel_fullWidthMobile.jpg"
                        },
                        {
                            name: "Serie 85000 - INCH   Conexões Push-In em Tecnopoímero para Tubos em Polegada",
                            file: "https://b2b.aignep.com/content/download/222720/61292981/file/85000%20-%20INCH.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-85000-inch/60040060-318-ita-IT/Serie-85000-INCH_fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 89000 - INCH  Conexões Push-In com Anilha e Corpo Metálicos para Tubos em Polegada",
                            file: "https://b2b.aignep.com/content/download/222721/61292983/file/89000%20-%20INCH.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-89000-inch/60039797-155-ita-IT/89000-INCH-Series-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 58000 Conexões Push-In para Alta Pressão",
                            file: "https://b2b.aignep.com/content/download/222722/61292985/file/58000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-58000/60144353-64-ita-IT/58000-Series-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série MIST FIT  Conexões Push-In para Sistemas De Nebulização",
                            file: "https://b2b.aignep.com/content/download/222723/61292987/file/84000H.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-automatici/serie-mist-fit/60160722-114-ita-IT/MIST-FIT-INCH-Series-High-Pressure_fullWidthMobile.jpg"
                        }
                    ]
                },
                {
                    name: "Conexões Push-On", 
                    links: [
                        {
                            name: "Série 61000 - INOX Conexões Push-On em Aço Inox",
                            file: "https://b2b.aignep.com/content/download/181230/21537871/file/61000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-calzamento/serie-61000-inox/13001734-378-ita-IT/Serie-61000-INOX-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série 1000 Conexões Push-On",
                            file: "https://b2b.aignep.com/content/download/181239/21537889/file/1000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-calzamento/serie-1000/12879811-2194-ita-IT/Serie-1000-fullWidthMobile.jpg"
                        },
                    ],
                },
                {
                    name: "Conexões de Compressão", 
                    links: [
                        {
                            name: "Série 9000 Conexões de Compressão",
                            file: "https://b2b.aignep.com/content/download/181234/21537879/file/9000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-compressione/serie-9000/16903355-278-ita-IT/Serie-9000-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série 10000  Conexões Universais de Cone Duplo",
                            file: "https://b2b.aignep.com/content/download/181235/21537881/file/10000.pdf",
                            img: " https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-compressione/serie-10000/16014733-773-ita-IT/Serie-10000-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série 13000  Conexões Universais",
                            file: "https://b2b.aignep.com/content/download/181236/21537883/file/13000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-compressione/serie-13000/16949585-1746-ita-IT/Serie-13000-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série 13000 NIQUELADO Conexões Universais",
                            file: "https://b2b.aignep.com/content/download/234017/75783544/file/SERIE_13000_NICKEL.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-compressione/serie-13000-nickel/75779637-15-ita-IT/Serie-13000-NICKEL-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série 69000 Conexões de Compressão Em Aço INOX AISI 316 L",
                            file: "https://b2b.aignep.com/content/download/201283/34826356/file/69000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-compressione/serie-69000/34752442-827-ita-IT/Serie-69000-fullWidthMobile.jpg"
                        }
                    ],
                },
                {
                    name: "Conexões Funcionais", 
                    links: [
                        {
                            name: "Série 66000 Conexões Funcionais em Aço Inoxidável AISI 316 L ",
                            file: "https://b2b.aignep.com/content/download/181232/21537875/file/66000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-funzione/serie-66000/16073382-116-ita-IT/Serie-66000-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série FUNCTION Conexões Funcionais",
                            file: "https://b2b.aignep.com/content/download/181231/21537873/file/FUNCTION.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/raccordi-a-funzione/serie-function/13436093-4025-ita-IT/Serie-FUNCTION-fullWidthMobile.jpg"
                        },  
                    ],
                },
                {
                    name: "Adaptadores", 
                    links: [
                        {
                            name: "Série Adapters Conexões Roscadas ",
                            file: "https://b2b.aignep.com/content/download/212723/54721428/file/Serie_Adapters.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/adattatori/serie-adapters/54506423-3313-rus-RU/Seriya-Adaptery-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série 62000 - INOX Adaptadores em Aço Inoxidável AISI 316L",
                            file: "https://b2b.aignep.com/content/download/181238/21537887/file/62000.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/adattatori/serie-62000-inox/13962315-897-ita-IT/62000-Series-INOX_fullWidthMobile.jpg"
                        },  
                    ],
                },
                {
                    name: "Válvulas de Esfera", 
                    links: [
                        {
                            name: "Série GHINOX  Válvulas de Esfera ",
                            file: "https://b2b.aignep.com/content/download/181250/21537911/file/GHINOX.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole-a-sfera/serie-ghinox/13766593-226-ita-IT/Serie-GHINOX-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série GHILUX Válvulas de Esfera",
                            file: "https://b2b.aignep.com/content/download/181237/21537885/file/GHILUX.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole-a-sfera/serie-ghilux/13659017-3605-ita-IT/Serie-GHILUX-fullWidthMobile.jpg"
                        },  
                    ],
                },
                {
                    name: "Série Tubes", 
                    links: [
                        {
                            name: "TB12 TUBO DE POLIAMIDA",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide/39211896-126-rus-RU/TRUBKA-POLIAMIDNAYA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TB12-POLLICI  TUBO DE POLIAMIDA DIMENSÔES EM POLEGADAS ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-dimensioni-in-pollici/39211602-85-rus-RU/TRUBKA-POLIAMIDNAYA-DYUJMOVAYA-NOMENKLATURA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TS12 TUBO DE POLIAMIDA - COMPRIMENTO 25 Mt",
                            file: "https://b2b.aignep.com/bra/Tubos/Serie-Tubes#:~:text=COMPRIMENTO%2025%20Mt-,Caracter%C3%ADsticas%20t%C3%A9cnicas%20/%20Cat%C3%A1logo,-TS12%2DPOLLICI",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-lunghezza-25-mt/39222369-82-rus-RU/TRUBKA-POLIAMIDNAYA-DLINA-25-m-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TS12-POLLICI TUBO DE POLIAMIDA DIMENSÔES EM POLEGADAS - LONGITUDE 25 Mt ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-autoestinguente/39213910-76-rus-RU/TRUBKA-POLIAMIDNAYA-SAMOZATUHAYUSCHAYA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TB12X  TUBO EM POLIAMIDA MULTI-CAMADAS ANTI-ESTÁTICO ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-multistrato-antistatico/39214627-71-rus-RU/TRUBKA-MNOGOSLOJNAYA-POLIAMIDNAYA-ANTISTATICHESKAYA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TB12P TUBO EM POLIAMIDA REVESTIDO EM PU ANTI-CHAMA ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-rivestito-in-pu-antiscintilla-ignifugo/39214290-71-rus-RU/TRUBKA-POLIAMIDNAYA-S-POLIURETANOVYM-SLOEM-OGNESTOJKAYA-ISKROBEZOPASNAYA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TB66 TUBO POLIAMIDA SEMI-RIGIDO ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliamide-rigido/39215172-64-rus-RU/TRUBKA-POLIAMIDNAYA-SEMIRIGID-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPU TUBO DE POLIURETANO POLIÉSTER 98 SHORE A ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliuretano-poliestere-98-shore-a/39219774-106-rus-RU/TRUBKA-IZ-POLIURETANA-I-POLIESTERA-TVERDOST-YU-98-PO-SHORU-A-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TSPU TUBO DE POLIURETANO POLIÉSTER 98 SHORE A - COMPRIMENTO DE 25 Mt ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliuretano-poliestere-98-shore-lunghezza-25-mt/39225917-75-rus-RU/TRUBKA-IZ-POLIURETANA-I-POLIESTERA-TVERDOST-YU-98-PO-SHORU-A-DLINA-25-m-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPO TUBO DE POLIURETANO POLIÉTER 90 SHORE A",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliuretano-polietere-90-shore-a/39218104-71-rus-RU/TRUBKA-IZ-POLIURETANA-I-POLIESTERA-TVERDOST-YU-90-PO-SHORU-A-fullWidthMobile.jpg"
                        }, 
                        {
                            name: " TSPO  TUBO DE POLIURETANO POLIÉTER 90 SHORE A - COMPRIMENTO DE 25 Mt",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-poliuretano-polietere-90-shore-a-lunghezza-25-mt/39224247-69-rus-RU/TRUBKA-IZ-POLIURETANA-I-POLIEFIRA-TVERDOST-YU-90-PO-SHORU-A-DLINA-25-m-fullWidthMobile.jpg "
                        }, 
                        {
                            name: "TBFE TUBO DE FEP",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-fep/39215380-71-rus-RU/TRUBKA-FEP-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TSFE  TUBO FEP - COMPRIMENTO DE 25 Mt",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-fep-lunghezza-25-mt/39223910-68-rus-RU/TRUBKA-FEP-DLINA-25-m-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPF  TUBO FLEXÍVEL DE PTFE ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-flessibile-in-ptfe/39215717-92-rus-RU/TRUBKA-GIBKAYA-PTFE-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPE TUBO DE POLIETILENO (PELLD) ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf ",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-in-polietilene-pelld/76612564-14-rus-RU/POLIETILENOVAYA-PELLD-TRUBKA-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SS12   ESPIRAL DE POLIAMIDA SEM ABAS",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/spirale-in-poliamide-senza-codoli/39211014-84-rus-RU/TRUBKA-SPIRAL-NAYA-POLIAMIDNAYA-BEZ-PRYAMYH-KONCOV-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SDPU ESPIRAL DE POLIURETANO POLIÉTER 95 SHORE A COM ABAS",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/spirale-in-poliuretano-polietere-95-shore-a-con-codoli/39201598-84-rus-RU/SHLANG-SPIRAL-NYJ-POLIURETAN-TVERDOST-PO-SHORU-95-A-S-PRYAMYMI-KONCAMI-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SK001 ESPIRAL DE POLIURETANO POLIÉTER 95 SHORE A COM CONEXÃO RETA MACHO ORIENTÁVEL COM ROSCA PARALELA ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/spirale-in-poliuretano-polietere-95-shore-a-con-raccordo-diritto-orientabile-maschio-cilindrico/39202480-48-rus-RU/SHLANG-SPIRAL-NYJ-POLIURETAN-POLIESTER-TVERDOST-95-PO-SHORU-A-S-POVOROTNYM-PRYAMY-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SK010 ESPIRAL DE POLIURETANO POLIÉTER 95 SHORE A COM PISTOLA DE AR ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/spirale-in-poliuretano-polietere-95-shore-a-con-pistole-di-soffiaggio/39202939-49-rus-RU/SHLANG-SPIRAL-NYJ-POLIESTER-TVERDOST-PO-SHORU-95-A-S-OBDUVOCHNYM-USTROJSTVOM-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SK022  ESPIRAL DE POLIURETANO POLIÉTER 95 SHORE A COM PISTOLA DE AR 362 ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf ",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/spirale-in-poliuretano-polietere-95-shore-a-con-pistole-di-soffiaggio-362/39203269-42-rus-RU/SHLANG-SPIRAL-NYJ-POLIESTER-TVERDOST-PO-SHORU-95-A-S-OBDUVOCHNYM-USTROJSTVOM-362-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPUM  TUBO DE POLIURETANO MULTICAMADAS- LUNGHEZZA 100 Mt",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-pvc-multistrato-extraflessibile/39221695-28-rus-RU/SHLANG-PVH-MNOGOSLOJNYJ-SVERHGIBKIJ-fullWidthMobile.jpg "
                        }, 
                        {
                            name: "TBPVM  TUBO MULTICAMADA SUPERFLEXIVEIS PVC ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-pvc-multistrato-extraflessibile/39221695-28-rus-RU/SHLANG-PVH-MNOGOSLOJNYJ-SVERHGIBKIJ-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "1770  ABRAÇADEIRA POR TUBO PVC ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/fascetta-stringitubo-per-tubi-pvc/38899404-22-rus-RU/ZAZHIMY-DLYA-SHLANGOV-PVH-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPV  TUBO PVC FOOD GRADE ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-pvc-food-grade/39221358-84-rus-RU/TRUBKA-PVH-S-PISCHEVYM-DOPUSKOM-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "TBPL TUBO PUSH-LOCK ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tubo-autobloccante/39217122-76-rus-RU/SHLANG-NA-ADAPTERY-S-OBZHIMOM-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "SEAL01 VEDANTE DE ROSCAS ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/sigillafiletti/39202021-46-rus-RU/REZ-BOVOJ-GERMETIK-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "NAFE  FITA EM PTFE ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/nastro-in-ptfe/39201433-65-rus-RU/FUM-LENTA-PTFE-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "1740 SUPORTE FIXA-TUBO ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/staffa-fissa-tubo/14885983-62-ita-IT/STAFFA-FISSA-TUBO_fullWidthMobile.jpg"
                        }, 
                        {
                            name: "1750   CORTADOR DE TUBOS EM PLASTICO",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tagliatubo-in-plastica/69181704-66-eng-US/TUBE-CUTTER_fullWidthMobile.jpg "
                        }, 
                        {
                            name: "1752 ALICATE METÁLICO CORTA-TUBOS ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/tagliatubo-in-metallo-per-tubi-plastici/38898780-70-rus-RU/REZAK-METALLICHESKIJ-DLYA-PLASTIKOVYH-TRUBOK-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "1753  LÂMINA DE REPOSIÇAO PARA 1752",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/lama-di-ricambio-per-1752/38898988-70-rus-RU/NOZH-ZAPASNOJ-DLYA-1752-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "1755   PINÇA CORTA-TUBOS PARA TUBO ANTI-CHAMA ",
                            file: "https://b2b.aignep.com/content/download/181241/21537893/file/TUBES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/tubi/serie-tubes/pinza-taglia-tubo-antiscintilla/38899196-71-rus-RU/ISKROBEZPASNYJ-REZAK-DLYA-TRUBOK-fullWidthMobile.jpg"
                        },  
                    ],
                },
            ]
        },
        {
            name: "Engates Rápidos",
            small: "Engates Rapidos e Pistolas de ar",
            image: "https://www.aignep.com/wp-content/uploads/2022/07/giunti-automatici.jpg",
            list: [
                {
                    name: "Conexões de Engate Rápido", 
                    links: [
                        {
                            name:" Série 100 Conexões de Engare Rápido UNI ISO 6150 - A - 6 (DN 2.5)",
                            file:"https://b2b.aignep.com/content/download/182283/26550702/file/Serie%20100.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-100-giunti-ad-innesto-rapido/14971252-398-ita-IT/Serie-100-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },   
                        {
                            name:"Série 110 Conexões de Engate Rápido  MIGNON (DN 5)",
                            file:"https://b2b.aignep.com/content/download/182284/26550704/file/Serie%20110.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-110-giunti-ad-innesto-rapido/14971693-676-ita-IT/Serie-110-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 120 B-12 Conexões de Engate Rápido UNI ISO 6150 - B - 12 (DN 5.5) ",
                            file:"https://b2b.aignep.com/content/download/182285/26550706/file/Serie%20120%20ISO.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-120-b-12-giunti-ad-innesto-rapido/14973268-937-ita-IT/Serie-120-B-12-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 120 ITALIAN Conexões de Engate Rápido ITALIAN (DN 5)",
                            file:"https://b2b.aignep.com/content/download/182286/26550708/file/Serie%20120%20ITA.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-120-italian-giunti-ad-innesto-rapido/14973469-891-ita-IT/Serie-120-ITALIAN-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 130 Conexões de Engate Rápido  UNI ISO 6150 - B - 15 (DN 9)",
                            file:"https://b2b.aignep.com/content/download/182287/26550710/file/Serie%20130.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-130-giunti-ad-innesto-rapido/14975372-584-ita-IT/Serie-130-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },
                        {
                            name:"Série 140 Conexões de Engate Rápido  UNI ISO 6150 - C - 10 (DN 5.5)",
                            file:"https://b2b.aignep.com/content/download/182288/26550712/file/Serie%20140.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-140-giunti-ad-innesto-rapido/14976057-601-ita-IT/Serie-140-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 160 Conexões de Engate Rápido  EUROPEAN (DN 7.5 - 7.8)",
                            file:"https://b2b.aignep.com/content/download/182289/26550714/file/Serie%20160.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-160-giunti-ad-innesto-rapido/14976947-800-ita-IT/Serie-160-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 730 Conexões de Engate Rápido EUROPEAN TOP-FLOW (DN 7.5 - 7.8) ",
                            file:"https://b2b.aignep.com/content/download/198042/33377207/file/730.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-730-giunti-ad-innesto-rapido/33356984-295-ita-IT/Serie-730-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },
                        {
                            name:"Série 740 Conexões de Engate Rápido EUROPEAN TOP-FLOW (DN 7.8) ",
                            file:"https://b2b.aignep.com/content/download/203563/35347138/file/Seria%20740.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-740-giunti-ad-innesto-rapido/35314543-150-ita-IT/Serie-740-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:" Série 170 Conexões de Engate Rápido   SWISS (DN 5.5)",
                            file:"https://b2b.aignep.com/content/download/182290/26550716/file/Serie%20170.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-170-giunti-ad-innesto-rapido/14978081-399-ita-IT/Serie-170-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 180 Conexões de Engate Rápido MIGNON (DN 5) ",
                            file:"https://b2b.aignep.com/content/download/182291/26550718/file/Serie%20180.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-180-giunti-ad-innesto-rapido/14978444-344-ita-IT/Serie-180-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg "
                        },
                        {
                            name:"Série 190 MULTISOCKET EUROPEAN (7.5 - 7.8) - UNI ISO 6150 - B - 12 (DN 5.5) - SWISS (DN 5.5) - ITALIAN (DN 5)",
                            file:"https://b2b.aignep.com/content/download/182292/26550720/file/Serie%20190.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-190-multisocket/14979211-3327-ita-IT/Serie-190-MULTISOCKET-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 400 Conexões de Engate Rápido JAPANESE (DN 7.5) ",
                            file:"https://b2b.aignep.com/content/download/182293/26550722/file/Serie%20400.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-400-giunti-ad-innesto-rapido/15000817-170-ita-IT/Serie-400-Giunti-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 700 Conexões de Engate Rápido  MINI (DN 2.7) ",
                            file:"https://b2b.aignep.com/content/download/182294/26550724/file/Serie%20700.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-700-prese-ad-innesto-rapido/15013979-212-ita-IT/Serie-700-Prese-ad-Innesto-Rapido-fullWidthMobile.jpg"
                        },
                        {
                            name:"Série 710 Conexões de Engate Rápido  UNI ISO 6150 - B - 17 (DN 12) ",
                            file:"https://b2b.aignep.com/content/download/182295/26550726/file/Serie%20710.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-710-prese-ad-innesto-rapido/15014381-138-ita-IT/Serie-710-Prese-ad-Innesto-Rapido-fullWidthMobile.jpg "
                        },  
                        {
                            name:"Série 720 B-SOCKET EUROPEAN (DN 10) - UNI ISO 6150 - B - 15 (DN 9)",
                            file:"https://b2b.aignep.com/content/download/182296/26550728/file/Serie%20720.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-720-b-socket/14985322-409-ita-IT/Serie-720-B-SOCKET-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 620 Conexões de Engate Rápido  UNI ISO 6150 - B - 12 (DN 5.5) ",
                            file:"https://b2b.aignep.com/content/download/182297/26550730/file/Serie%20620.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-620-prese-di-sicurezza/14981516-423-ita-IT/Serie-620-Prese-di-Sicurezza-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 650 Conexões de Engate Rápido  ITALIAN (DN 5) ",
                            file:"https://b2b.aignep.com/content/download/182298/26550732/file/Serie%20650.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-650-prese-di-sicurezza/14988146-322-ita-IT/Serie-650-Prese-di-Sicurezza-fullWidthMobile.jpg"
                        },
                        {
                            name:"Série 660 Conexões de Engate Rápido  EUROPEAN (DN 7.8)",
                            file:"https://b2b.aignep.com/content/download/182299/26550734/file/Serie%20660.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-660-prese-di-sicurezza/14992276-251-ita-IT/Serie-660-Prese-di-Sicurezza-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 670 Conexões de Engate Rápido  SWISS (DN 5.5)",
                            file:"https://b2b.aignep.com/content/download/182300/26550736/file/Serie%20670.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-670-prese-di-sicurezza/14996445-334-ita-IT/Serie-670-Prese-di-Sicurezza-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 0B120 B-12 Conexões de Engate Rápido com Botão  UNI ISO 6150 - B - 12 (DN 5.5)",
                            file:"https://b2b.aignep.com/content/download/199986/34309980/file/0B120.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-0b120-prese-di-sicurezza-con-bottone/34277835-159-ita-IT/Serie-0B120-Prese-di-Sicurezza-con-Bottone-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 0B140 C-10 Conexões de Engate Rápido com Botão  UNI ISO 6150 - C - 10 (DN 5.5)",
                            file:"https://b2b.aignep.com/content/download/199985/34309978/file/0B140.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-0b140-prese-di-sicurezza-con-bottone/34278416-195-ita-IT/Serie-0B140-Prese-di-Sicurezza-con-Bottone-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 410 Conexões de Engate Rápido para Resfriamento de Moldes ",
                            file:"https://b2b.aignep.com/content/download/182301/26550738/file/Serie%20410.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-410-giunti-ad-innesto-rapido-per-raffreddamento-stampi/15001342-345-ita-IT/Serie-410-Giunti-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 420 Conexões de Engate Rápido para Resfriamento de Moldes",
                            file:"https://b2b.aignep.com/content/download/182302/26550740/file/Serie%20420.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-420-giunti-ad-innesto-rapido-per-raffreddamento-stampi/15002068-227-ita-IT/Serie-420-Giunti-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 430 Conexão de Engate Rápido para Resfriamento de Moldes",
                            file:"https://b2b.aignep.com/content/download/182303/26550742/file/Serie%20430.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-430-prese-ad-innesto-rapido-per-raffreddamento-stampi/15002308-369-ita-IT/Serie-430-Prese-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 440 Conexão de Engate Rápido para Resfriamento de Moldes",
                            file:"https://b2b.aignep.com/content/download/182304/26550744/file/Serie%20440.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-440-giunti-ad-innesto-rapido-per-raffreddamento-stampi/15003151-293-ita-IT/Serie-440-Giunti-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 460 Conexões de Engate Rápido para Resfriamento de Moldes EUROPEAN (DN 6)",
                            file:"https://b2b.aignep.com/content/download/182305/26550746/file/Serie%20460.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-460-giunti-ad-innesto-rapido-per-raffreddamento-stampi/15003994-359-ita-IT/Serie-460-Giunti-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 470 Conexões de Engate Rápido para Resfriamento de Moldes",
                            file:"https://b2b.aignep.com/content/download/182306/26550748/file/Serie%20470.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-470-giunti-ad-innesto-rapido-per-raffreddamento-stampi/15004837-452-ita-IT/Serie-470-Giunti-ad-Innesto-Rapido-per-Raffreddamento-Stampi-fullWidthMobile.jpg"
                        }, 
                        {
                            name:"Série 63000 Conexão Multisocket em Aço Inox AISI 316 L",
                            file:"https://b2b.aignep.com/content/download/182346/26972705/file/63000.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/giunti-ad-innesto-rapido/serie-63000-multipresa-in-acciaio-inox-aisi-316-l/15010856-248-ita-IT/63000-Series-Stainless-Steel-AISI-316-L-Multisocket-fullWidthMobile.jpg"
                        },   
                    ],
                },
                {
                    name: "Pistola de Ar", 
                    links: [
                        {
                            name:"Série 300 Pistola de Ar",
                            file:"https://b2b.aignep.com/content/download/205535/37045072/file/SERIE%20300.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/pistole-di-soffiaggio/serie-300/35225643-160-ita-IT/Serie-300-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 340  Pistola de Ar ",
                            file:"https://b2b.aignep.com/content/download/205538/37045090/file/SERIE%20340.pdf",
                            img:"https://b2b.aignep.com/var/sito/storage/images/home/pistole-di-soffiaggio/serie-340/16163300-115-ita-IT/Serie-340-fullWidthMobile.jpg"
                        },  
                        {
                            name:"Série 360  Pistola de Ar",
                            file:"https://b2b.aignep.com/content/download/205534/37045070/file/SERIE_360.pdf",
                            img:"Série 360 Pistola de Ar"
                        },   
                    ],
                }, 
            ]
        },
        {
            name: "Automação",
            small: "Válvulas, Atuadores Pneumáticos, Cilindros Elétricos e unidades FRL para tratamento de ar comprimido",
            image: "https://www.aignep.com/wp-content/uploads/2022/07/automazione-800x533.jpg",
            list: [
                {
                    name: "Válvulas", 
                    links: [
                        {
                            name: "Série 01V  Válvulas Eletro-Pneumáticas, Pneumáticas e Manuais",
                            file: "https://b2b.aignep.com/content/download/182272/26550668/file/Valve_01V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-01v/17485063-1621-ita-IT/01V-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série X1V  Válvulas Eletro-Pneumáticas e Manuais em Aço Inox AISI 316L",
                            file: "https://b2b.aignep.com/content/download/203500/35340626/file/X1V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-x1v/35179566-274-ita-IT/X1V-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 02V  Micro-Válvula",
                            file: "https://b2b.aignep.com/content/download/182274/26550678/file/Valve_02V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-02v/17673439-160-ita-IT/02V-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 03V Válvula de 16 mm com Acionamento Mecânico e Manual",
                            file: "https://b2b.aignep.com/content/download/182275/26550680/file/Valve_03V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-03v/17673839-140-ita-IT/03V-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 04V  Válvula para Painel, Botões e Seletor",
                            file: "https://b2b.aignep.com/content/download/182276/26550682/file/Valve_04.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-04v/17786609-242-ita-IT/04V-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 05V Válvula de 18 MM VDMA",
                            file: "https://b2b.aignep.com/content/download/182278/26550692/file/Valve_05V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-05v/17788022-353-ita-IT/05V-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 06V   Válvula Pedal",
                            file: "https://b2b.aignep.com/content/download/182279/26550694/file/Valve_06V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-06v/17789271-86-ita-IT/06V-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 07V  Válvulas Solenóide",
                            file: "https://b2b.aignep.com/content/download/182280/26550696/file/Valve_07V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-07v/17259408-506-ita-IT/07V-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 08V Válvula Namur",
                            file: "https://b2b.aignep.com/content/download/182281/26550698/file/Valve_08V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-08v/17789630-294-ita-IT/08V-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 10V   Válvulas Eletro-Pneumáticas, Pneumáticas e Manuais",
                            file: "https://b2b.aignep.com/content/download/205235/36165607/file/Valve_10V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-10v/68862232-450-eng-US/10V-Series-ISO-5599-SIZE-1_fullWidthMobile.jpg "
                        },  
                        {
                            name: "Série 11V  Válvulas Eletro-Pneumáticas, Pneumáticas e Manuais",
                            file: "https://b2b.aignep.com/content/download/205236/36165609/file/Valve_11V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-11v/36094600-249-ita-IT/11V-Series-Valves-ISO-5599-SIZE-2_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série 12V  Válvula de Avalanca Manual",
                            file: "https://b2b.aignep.com/content/download/182282/26550700/file/Valve_12V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-12v/17491054-76-ita-IT/Serie-12V-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Serie 14V  Terminal de Válvulas Eletropneumáticas - G1/8",
                            file: "https://b2b.aignep.com/content/download/234491/76097992/file/SERIE_14V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-14v/76092004-16-ita-IT/Serie-14V-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Serie 16V  Válvulas Eletropneumáticas Fieldbus",
                            file: "https://b2b.aignep.com/content/download/234458/76091956/file/SERIE_16V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/valvole/serie-16v/76028716-104-ita-IT/Serie-16V-fullWidthMobile.jpg"
                        },  
                    ],
                },
                {
                    name: "Atuadores Pneumáticos", 
                    links: [
                        {
                            name: "Série Cilindros Plug",
                            file: "https://b2b.aignep.com/content/download/182307/26550750/file/Serie%20CA.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-cilindri-a-cartuccia/68939682-107-eng-US/Cartridge-Cylinders-Series-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Mini  Cilindros Mini ISO 6432",
                            file: "https://b2b.aignep.com/content/download/182308/26550752/file/Serie%20MINI.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-mini/68963500-2730-eng-US/Mini-Series-ISO-6432_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série MINI INOX  Cilindros Mini-Iso em Inox ISO 6432",
                            file: "https://b2b.aignep.com/content/download/182309/26550754/file/Serie%20MINI%20INOX.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-mini-inox/68963937-1568-eng-US/MINI-INOX-Series-ISO-6432_fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série A95   Cilindros A95",
                            file: "https://b2b.aignep.com/content/download/182310/26550756/file/Serie%20A95.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-a95/68981212-2403-eng-US/A95-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Q Cilindros Compactos",
                            file: "https://b2b.aignep.com/content/download/182311/26550758/file/Serie%20Q.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-q/68992651-2371-eng-US/Q-Series_fullWidthMobile.jpg "
                        }, 
                        {
                            name: "Série B Cilindros de Curso Reduzido",
                            file: "https://b2b.aignep.com/content/download/182312/26550760/file/Serie%20B.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-b/38325902-3283-rus-RU/Seriya-B-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série L  Cilindros ISO 15552",
                            file: "https://b2b.aignep.com/content/download/214023/55945654/file/SERIE_L.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-l/68721391-2341-eng-US/L-Series-ISO-15552_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série E Cilindros com tirantes ISO 6431",
                            file: "https://b2b.aignep.com/content/download/223529/63149914/file/Serie%20E.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-e/69071180-480-eng-US/E-Series-ISO-6431_fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série X Cilindros ISO 15552",
                            file: "https://b2b.aignep.com/content/download/182313/26550762/file/Serie%20X.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-x/68553566-2804-eng-US/X-Series-ISO-15552_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série V Cilindros em Inox ISO 15552",
                            file: "https://b2b.aignep.com/content/download/182315/26550766/file/Serie%20V.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-v/69071487-775-eng-US/V-Series-ISO-15552_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série NHA Cilindros de Haste Dupla ISO 15552",
                            file: "https://b2b.aignep.com/content/download/182316/26550768/file/Serie%20NHA.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-nha/69039228-2170-eng-US/NHA-Series-ISO-15552_fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série W Cilindros Compactos ISO 21287",
                            file: "https://b2b.aignep.com/content/download/182317/26550770/file/Serie%20W.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-w/69071750-4184-eng-US/W-Series-ISO-21287_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série P   Cilindros Compactos ISO 15552",
                            file: "https://b2b.aignep.com/content/download/182318/26550772/file/Serie%20P.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-p/38360272-688-rus-RU/Seriya-P-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Accesorios para Cilindros Componente de Fixação para Cilindros ISO 6431 / ISO 15552 / ISO 21287 Incliuindo Parafusos",
                            file: "https://b2b.aignep.com/content/download/182319/26550774/file/Serie%20ACCESSORIES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-accessori-per-cilindri/69150769-2710-eng-US/Accessories-for-Cylinders-Series_fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série CG01  Cilindro Dupla Ação Magbético com Guia Dupla   ",
                            file: "https://b2b.aignep.com/content/download/182321/26550778/file/Serie%20CG01.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-cg01/38345602-355-rus-RU/Seriya-CG01-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série CG02  Cilindro Dupla Ação Magbético com Haste Dupla",
                            file: "https://b2b.aignep.com/content/download/182322/26550780/file/Serie%20CG02.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-cg02/38349116-357-rus-RU/Seriya-CG02-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série CG04   Cilindros Dupla Ação Magnético com Mesa Deslizante",
                            file: "https://b2b.aignep.com/content/download/182323/26550782/file/Serie%20CG04.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-cg04/38351390-776-rus-RU/Seriya-CG04-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série RT01  Cilindros Rotativos",
                            file: "https://b2b.aignep.com/content/download/182326/26550788/file/Serie%20RT01.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-rt01/38364072-508-rus-RU/Seriya-RT01-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série RT03S Cilindros Rotativos Compactos",
                            file: "https://b2b.aignep.com/content/download/182327/26550790/file/Serie%20RT03S.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-rt03s/38364239-360-rus-RU/Seriya-RT03S-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série GR01F  Garra Pneumática",
                            file: "https://b2b.aignep.com/content/download/182328/26550792/file/Serie%20GR01F.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-gr01f/38363404-270-rus-RU/Seriya-GR01F-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série GR02F  Garra Pneumática Larga ",
                            file: "https://b2b.aignep.com/content/download/182329/26550794/file/Serie%20GR02F.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-gr02f/38363905-424-rus-RU/Seriya-GR02F-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série GR03F   Garra Pneumática de Abertura Angular",
                            file: "https://b2b.aignep.com/content/download/182330/26550796/file/Serie%20GR03F.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-gr03f/38363571-248-rus-RU/Seriya-GR03F-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série GR04F   Garra Pneumática de Abertura Angular 180°",
                            file: "https://b2b.aignep.com/content/download/182331/26550798/file/Serie%20GR04F.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-gr04f/38365111-318-rus-RU/Seriya-GR04F-fullWidthMobile.jpg"
                        },
                        {
                            name: "Série GR05F Garra Pneumática de 3 Dedos",
                            file: "https://b2b.aignep.com/content/download/182332/26550800/file/Serie%20GR05F.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-gr05f/38363738-241-rus-RU/Seriya-GR05F-fullWidthMobile.jpg"
                        }, 
                        {
                            name: "Série Sensores",
                            file: "https://b2b.aignep.com/content/download/232545/73276578/file/SERIE_SENSOR.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-pneumatici/serie-sensori/69039491-267-eng-US/Sensors-Series_fullWidthMobile.jpg"
                        },   
                    ],
                },
                {
                    name: "Atuadores Elétricos", 
                    links: [
                        {
                            name: "Série H - Sem Motor  Cilindros elétricos para motor em linha",
                            file: "https://b2b.aignep.com/content/download/232489/73163785/file/SERIE_H_G.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-h-senza-motore/73110757-10-ita-IT/Serie-H-Senza-Motore-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série H - Con Motor   Cilindros elétricos com motor em linha",
                            file: "https://b2b.aignep.com/content/download/227863/67941298/file/SERIE_H_G.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-h-con-motore/67936690-23-ita-IT/Serie-H-Con-Motore-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série G - Sem Motor  Cilindros elétricos para motor em paralelo",
                            file: "https://b2b.aignep.com/content/download/232490/73163787/file/SERIE_H_G.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-g-senza-motore/73137858-12-ita-IT/Serie-G-Senza-Motore-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série G - Con Motor   Cilindros elétricos com motor em paralelo",
                            file: "https://b2b.aignep.com/content/download/227920/67953167/file/SERIE_H_G.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-g-con-motore/67951940-8-ita-IT/Serie-G-Con-Motore-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Motores sem escova    Motores sem escova para Atuadores Elétricos",
                            file: "https://b2b.aignep.com/content/download/227348/67430512/file/SERIE_MOTORS.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-motori-brushless/67427324-79-ita-IT/Serie-Motori-Brushless-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Servo-acionamento   Servo-acionamento para motores sem escovas",
                            file: "https://b2b.aignep.com/content/download/227955/67971710/file/SERIE_SA.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-servoazionamenti/67965928-11-ita-IT/Serie-Servoazionamenti-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Accesorios para Cilindros Elétricos Componente de Fixação para Cilindros ISO 6431 / ISO 15552 / ISO 21287 Incliuindo Parafusos",
                            file: "https://b2b.aignep.com/content/download/227456/67496078/file/SERIE_ACCESSORIES.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-accessori-per-cilindri-elettrici/67424942-981-rus-RU/Seriya-prinadlezhnosti-dlya-cilindrov-cilindrov-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série Sensores",
                            file: "https://b2b.aignep.com/content/download/227455/67496076/file/SERIE_SENSORS.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/attuatori-elettrici/serie-sensori/67488492-30-ita-IT/Serie-Sensori-fullWidthMobile.jpg"
                        },    
                    ],
                },
                {
                    name: "F.R.L.", 
                    links: [ 
                        {
                            name: "Série FRL Mini  Componentes para Tratamento de Ar Comprimido - Série FRL Mini",
                            file: "https://b2b.aignep.com/content/download/229121/68537841/file/FRL.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/f.r.l/serie-frl-mini/21116593-393-ita-IT/Serie-FRL-Mini-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série FRL Evo Componentes para Tratamento de Ar Comprimido - Série FRL Evo",
                            file: "https://b2b.aignep.com/content/download/206854/38012154/file/FRL%20EVO.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/f.r.l/serie-frl-evo/37930702-1110-ita-IT/FRL-Evo-Series_fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série FRL Componentes para Tratamento de Ar Comprimido - Série FRL",
                            file: "https://b2b.aignep.com/content/download/182371/27087703/file/FRL.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/f.r.l/serie-frl/20910118-857-ita-IT/Serie-FRL-fullWidthMobile.jpg"
                        },  
                        {
                            name: "Série MANÔMETRO E PRESSOSTATOS   Manômetro e Pressostatos",
                            file: "https://b2b.aignep.com/content/download/182369/27087699/file/MANOMETRI%20E%20PRESSOSTATI.pdf",
                            img: "https://b2b.aignep.com/var/sito/storage/images/home/f.r.l/serie-manometri-e-pressostati/20906502-1348-ita-IT/Serie-MANOMETRI-E-PRESSOSTATI-fullWidthMobile.jpg"
                        },   
                    ],
                },
            ]
        },
        {
            name: "Redes de ar comprimido",
            small: "A linha Infinity para distribuição de ar comprimido, gases inertes e vácuo",
            image: "https://www.aignep.com/wp-content/uploads/2022/07/infinity.jpg",
            list: [
                {
                    name: "Série Redes De Ar Comprimido INFINITY", 
                    pdf:"https://b2b.aignep.com/bra/content/download/180703/75428316/file/Redes%20De%20Ar%20Comprimido%20%22INFINITY%22.pdf",
                    links: [ ],
                }, 
            ]
        },
        {
            name: "Válvulas Fluidity",
            small: "A linha Fluidity para controle e distribuição de fluidos líquidos e gasosos",
            image: "https://www.aignep.com/wp-content/uploads/2022/07/fluidity.jpg",
            list: [
                {
                    name: "Válvula Solenóide para Fluidos FLUIDITY", 
                    links: [ ],
                    pdf:"https://b2b.aignep.com/bra/content/download/180710/76841630/file/V%C3%A1lvula%20Solen%C3%B3ide%20para%20Fluidos%20%22FLUIDITY%22.pdf"
                }, 
            ]
        },

    ];


    return (
        <div className='custom-cards'>
            {Data.map((item, index) => (
                <article key={index} className="card1" onClick={() => handleShow(item)}  >
                    <ImageLazyLoading source={item.image} height={250} />
                    <h3>{item.name}</h3>
                    <small className="text-main">{item.small}</small>
                </article>
            ))}

            <Offcanvas show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>  <strong>{currentData.name}</strong> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='scroll-area'>
                        {currentData?.list?.map((item, index) => (
                            <div className="box-data">
                                <div className="col text-light text-center bg-dark mb-2 p-3">
                                    <h5>{item.name}</h5>
                                </div>
                        
                                <a href={item.pdf} className={(item.pdf !== undefined && item.pdf !== null) ? "mt-2" : "d-none"  } target="_blank" rel="noopener noreferrer">
                                     <button className="col-lg-12 bg-main text-main btn">ver catalogo</button>
                                </a>
                                <ol>
                                    {item?.links?.map((el, ind) => (
                                        <li key={ind} >
                                            <div>
                                               <a href={el.file} target="_blank" rel="noopener noreferrer"><ImageLazyLoading source={el.img} height={100} /></a>
                                            </div>
                                             <div>
                                                <a href={el.file} target="_blank" rel="noopener noreferrer">
                                                    <button className="col-lg-12 bg-main text-main btn">ver catalogo</button>
                                                </a>
                                            </div>
                                            <div>
                                              <span>{el.name}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default AignepProducts