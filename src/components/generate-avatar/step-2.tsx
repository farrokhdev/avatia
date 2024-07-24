import React, {ReactElement, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import ModelViewer from "./model-viewer";
import {ReactComponent as Hair} from '../../assets/svgs/hair.svg'
import {generateAvatarHair} from "../../api/avatar.api";

const Box = styled.div`
    display: flex;

    > .col-1 {

    }

    > .col-2 {
        margin-left: 100px;
        width: 100%;


        > .styles {
            height: 90px;
            border-radius: 45px;
            background: #FFFFFF;
            border: 1px solid #D4E3FE;
            box-shadow: 0 7px 15px 0 #165ADE5C inset;
            display: flex;
            grid-template-columns: auto;
            gap: 10px;

            > svg {
                margin-left: 60px;
                margin-top: 15px;
            }

            > p {
                margin-left: 60px;
                font-family: 'Poppins', sans-serif;
                font-size: 20px;
                font-weight: 400;
                line-height: 30px;
                letter-spacing: 0;
                text-align: left;
                margin-top: 30px;
                cursor: pointer;

                &.active {
                    color: #165ADE;
                }
            }
        }

        > .items {
            width: 100%;
            height: 370px;
            margin-top: 30px;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(4, 200px);
            column-gap: 40px;
            row-gap: 20px;
            overflow: auto;

            > .item > img {
                width: 200px;
                height: 130px;
                border-radius: 20px;
                background: #FFFFFF;
                cursor: pointer;
            }

            > .item.selected {
                width: 200px;
                height: 130px;
                border-radius: 20px;
                border: 2px solid #165ADE5C;
            }
        }
    }
`

export interface Props {
    file: File | undefined,
    avatarUrl: string,
    hairName: string,
    setHairName: (hairName: string) => void
    handleGenerateHair: (hairName: string) => void
}

export interface HairsList {
    name: string,
    image: string,
    colorCode: string,
    tab: string
}

export function Step2GenerateAvatar(props: Props): ReactElement {

    const [tabs, setTabs] = useState<Array<{ title: string }>>([
        {title: 'Man Classic'},
        {title: 'Man Curl'},
        {title: 'Woman Bob'},
        {title: 'Woman Classic'},
    ])
    const [activeTab, setActiveTab] = useState<string>('Man Classic')

    const handleChangeTab = (tab: string) => {
        setActiveTab(tab)
        setHairs(hairsList.filter(item => item.tab === tab))
    }

    const hairsList: Array<HairsList> = [
        {
            name: 'classic_man_hair_light_836843.glb',
            image: require('../../assets/images/hairs/man classic/classic_man_hair_light_836843.png'),
            colorCode: '836843',
            tab: 'Man Classic'
        },
        {
            name: 'classic_man_hair_brown_3D260F.glb',
            image: require('../../assets/images/hairs/man classic/classic_man_hair_brown_3D260F.png'),
            colorCode: '3D260F',
            tab: 'Man Classic'
        },
        {
            name: 'curl_man_light_C7C1A1.glb',
            image: require('../../assets/images/hairs/man curl/curl_man_light_C7C1A1.png'),
            colorCode: 'C7C1A1',
            tab: 'Man Curl'
        },
        {
            name: 'curl_man_brown_382D21.glb',
            image: require('../../assets/images/hairs/man curl/curl_man_brown_382D21.png'),
            colorCode: '382D21',
            tab: 'Man Curl'
        },
        {
            name: 'woman_bob_light_9C7C5A.glb',
            image: require('../../assets/images/hairs/woman bob/woman_bob_light_9C7C5A.png'),
            colorCode: '9C7C5A',
            tab: 'Woman Bob'
        },
        {
            name: 'woman_bob_dark_2E1A10.glb',
            image: require('../../assets/images/hairs/woman bob/woman_bob_dark_2E1A10.png'),
            colorCode: '2E1A10',
            tab: 'Woman Bob'
        },
        {
            name: 'woman_bob_blue_4FAEA8.glb',
            image: require('../../assets/images/hairs/woman bob/woman_bob_blue_4FAEA8.png'),
            colorCode: '4FAEA8',
            tab: 'Woman Bob'
        },
        {
            name: 'woman_classic_hair_1C1914.glb',
            image: require('../../assets/images/hairs/woman classic/woman_classic_hair_1C1914.png'),
            colorCode: '1C1914',
            tab: 'Woman Classic'
        },
        {
            name: 'light_blond_woman_classic_hair_B2A190.glb',
            image: require('../../assets/images/hairs/woman classic/light_blond_woman_classic_hair_B2A190.png'),
            colorCode: 'B2A190',
            tab: 'Woman Classic'
        },
        {
            name: 'blue_woman_classic_hair_4FAEA8.glb',
            image: require('../../assets/images/hairs/woman classic/blue_woman_classic_hair_4FAEA8.png'),
            colorCode: '4FAEA8',
            tab: 'Woman Classic'
        },
    ]

    const [hairs, setHairs] = useState<Array<HairsList>>([])
    useEffect(() => {
        setHairs(hairsList.filter(item => item.tab === activeTab))
    }, []);

    return (
        <Box>
            <div className={'col-1'}>
                <ModelViewer src={props.avatarUrl}/>
            </div>
            <div className={'col-2'}>
                <div className={'styles'}>
                    {tabs.map((tab) => (
                        <p onClick={() => handleChangeTab(tab.title)}
                           className={`${tab.title === activeTab ? 'active' : ''}`}>{tab.title}</p>
                    ))}
                </div>
                <div className={'items'}>
                    {hairs.map((hair) => (
                        <div className={`item ${props.hairName === hair.name ? 'selected' : ''}`}
                             onClick={() => {
                                 props.setHairName(hair.name)
                                 props.handleGenerateHair(hair.name)
                             }}
                             style={{position: 'relative'}}>
                            <img src={hair.image}/>

                            <div style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: `#${hair.colorCode}`,
                                borderRadius: '1000px',
                                zIndex: '10',
                                textAlign: 'center',
                                margin: '0 auto 0 auto',
                                position: 'absolute',
                                top: '10px',
                                left: '10px'
                            }}></div>
                        </div>
                    ))}

                </div>
            </div>
        </Box>
    )
}
