import React, {ReactElement, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import ModelViewer from "./model-viewer";
import {ReactComponent as CheckCircle} from '../../assets/svgs/check-circle.svg'

const Box = styled.div`
    display: flex;

    > .col-1 {

    }

    > .col-2 {
        margin-left: 100px;
        width: 100%;

        > h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 22px;
            font-weight: 600;
            line-height: 31px;
            letter-spacing: 0;
            text-align: left;
            color: ${({theme}) => theme.black100};
        }


        > .border {
            width: 100%;
            height: 1px;
            background: ${({theme}) => theme.blue90};
        }

        > p {
            font-family: 'Poppins', sans-serif;
            font-size: 17px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0;
            text-align: left;
        }

        > .check-list {
            margin-top: 30px;

            > ul {
                list-style: none;
                margin: 0 !important;
                padding-inline-start: 0;

                > li {
                    display: flex;
                    margin-bottom: 10px;

                    > svg {
                        margin-top: 5px;
                    }

                    > span {
                        font-family: 'Poppins', sans-serif;
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 30px;
                        letter-spacing: 0;
                        text-align: left;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`

export interface Props {
    file: File | undefined,
    avatarUrl: string,
}

export function Step3GenerateAvatar(props: Props): ReactElement {

    return (
        <Box>
            <div className={'col-1'}>
                <ModelViewer src={props.avatarUrl}/>
            </div>
            <div className={'col-2'}>
                <h3 style={{marginTop: '70px'}}>Available Formats</h3>
                <div className={'border'}></div>

                <p>You can download your avatar GLB file</p>
                <div className={'check-list'}>
                    <ul>
                        <li><CheckCircle/> <span>GLB</span></li>
                        {/*<li><CheckCircle/> <span>LGB</span></li>*/}
                        {/*<li><CheckCircle/> <span>GIF</span></li>*/}
                    </ul>
                </div>
            </div>
        </Box>
    )
}
