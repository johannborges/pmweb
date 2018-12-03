import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import './styles/css/style.css';

const Chart = ({options}) => (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
)

const Widget = ({options}) => (
    <div className="widget">
        <div className="icon">
            {options.type === "song" ? <SongIcon /> : <RipIcon />}
        </div>

        <div className="title">{options.title}</div>

        <div className="value">{options.value}</div>

        <div className="percentage_holder">
            <div className={"percentage " + options.percentageClass}>{options.percentage}</div>
        </div>

        <div className="question_holder">
            <div className="question">
                <QuestionIcon />
            </div>
        </div>
    </div>
)

const QuestionIcon = () => (
    <svg viewBox="0 0 16 16">
        <g>
            <path d="M8,1a7,7,0,1,0,7,7A7,7,0,0,0,8,1ZM8,13.6A5.6,5.6,0,1,1,13.6,8,5.6,5.6,0,0,1,8,13.6ZM5.53,5.78A2.4,2.4,0,0,1,6.89,4.37,2.85,2.85,0,0,1,8,4.17a3.48,3.48,0,0,1,1.29.21,2.82,2.82,0,0,1,.83.53,2.06,2.06,0,0,1,.45.68,1.94,1.94,0,0,1,.13.68,2.36,2.36,0,0,1-.13.86,2.61,2.61,0,0,1-.34.57,2.17,2.17,0,0,1-.45.41l-.46.34a2.28,2.28,0,0,0-.38.38,1.08,1.08,0,0,0-.21.54v.42H7.23V9.3a2.13,2.13,0,0,1,.18-.78A2.37,2.37,0,0,1,7.75,8a3,3,0,0,1,.41-.39l.41-.32a1.39,1.39,0,0,0,.29-.36A.91.91,0,0,0,9,6.42a1,1,0,0,0-.25-.74A.92.92,0,0,0,8,5.44a1,1,0,0,0-.5.12.92.92,0,0,0-.35.3,1.32,1.32,0,0,0-.2.45,2.35,2.35,0,0,0-.06.54H5.33A3,3,0,0,1,5.53,5.78Zm3.32,5.5h0a.83.83,0,0,1-.83.83H8a.83.83,0,0,1-.83-.83h0A.83.83,0,0,1,8,10.44H8A.83.83,0,0,1,8.85,11.28Z"/>
        </g>
    </svg>
)

const RipIcon = () => (
    <svg viewBox="0 0 30 30">
        <g id="Camada_1">
            <path d="M16.51,7.73V11.4H20v3H16.51v8.7h-3v-8.7H10v-3h3.47V7.73h3m1-1h-5V10.4H9v5h3.47v8.7h5v-8.7H21v-5H17.51V6.73ZM15,2A13,13,0,1,1,2,15,13,13,0,0,1,15,2m0-1A14,14,0,1,0,29,15,14,14,0,0,0,15,1Z"/>
        </g>
    </svg>
)

const SongIcon = () => (
    <svg viewBox="0 0 30 30">
        <g>
            <path d="M15,28.45A13.45,13.45,0,1,1,28.45,15,13.47,13.47,0,0,1,15,28.45Zm0-25.9A12.45,12.45,0,1,0,27.45,15,12.47,12.47,0,0,0,15,2.55Zm5.65,4.81h-.08l-9,2.93a.26.26,0,0,0-.17.24v8.17a2.23,2.23,0,0,0-1.32-.42,2.33,2.33,0,1,0,2.33,2.33V13.79l7.46-2.44V17a2.36,2.36,0,0,0-1.33-.42,2.33,2.33,0,1,0,2.33,2.33V7.61A.25.25,0,0,0,20.65,7.36ZM10.11,22a1.33,1.33,0,1,1,1.32-1.35v0h0A1.34,1.34,0,0,1,10.11,22Zm8.46-1.74a1.33,1.33,0,1,1,1.33-1.35v0h0A1.34,1.34,0,0,1,18.57,20.21ZM19.9,9.72v.58l-7.46,2.44V11.46h0v-.38L19.9,8.64V9.72Z"/>
        </g>
    </svg>
)

const Logo = () => (
    <svg id="logo" viewBox="0 0 214.42 77.91">
        <g>
            <path  d="M11.17,74.39H2.82v-48h8.35v3.38a16.73,16.73,0,0,1,11.21-4.25,16.83,16.83,0,0,1,12.28,4.73,15.7,15.7,0,0,1,4.9,11.85A15.46,15.46,0,0,1,34.7,53.72a16.86,16.86,0,0,1-12.17,4.63A16.79,16.79,0,0,1,11.17,54ZM31,42.1A9.7,9.7,0,0,0,21,32a10.31,10.31,0,0,0-7.46,2.75,9.54,9.54,0,0,0-2.86,7.22,9.74,9.74,0,0,0,2.86,7.22A10.12,10.12,0,0,0,21,51.94a9.74,9.74,0,0,0,7.16-2.81A9.4,9.4,0,0,0,31,42.1Z"/>
            <path d="M38.89,26.36h8.35v2.87a17.12,17.12,0,0,1,4.12-2.94,11.39,11.39,0,0,1,4.56-.8,11.63,11.63,0,0,1,9.69,4.6,13.3,13.3,0,0,1,10.64-4.6q12.21,0,12.21,12.75V57.46H80.07V40.18c0-3-.42-5.08-1.26-6.32A4.81,4.81,0,0,0,74.55,32a5.73,5.73,0,0,0-5,2.24Q67.94,36.45,68,41.4V57.46H59.56V40.28Q59.56,32,54,32a5.88,5.88,0,0,0-5.14,2.27q-1.6,2.26-1.61,7.16V57.46H38.89Z"/>
            <path d="M98.27,26.36l9.46,17.75,10.21-20.6,10.27,20.6,9.35-17.75h9.35L128,59.79l-10-20-10.17,20L88.88,26.36Z"/>
            <path d="M174.81,43.6H148.92a8.78,8.78,0,0,0,2.89,6.1,10.86,10.86,0,0,0,11.72,1,19.17,19.17,0,0,0,4.57-4.73l7.05,3.39a25.12,25.12,0,0,1-3.45,4.1,17.67,17.67,0,0,1-3.9,2.81,17.13,17.13,0,0,1-4.49,1.61,25.22,25.22,0,0,1-5.23.51q-8.09,0-13-4.47a15.46,15.46,0,0,1-4.9-11.94A15.79,15.79,0,0,1,145,30q4.78-4.52,12.69-4.51t12.61,4.38q4.6,4.35,4.6,12Zm-8.57-5.88Q164.5,32,157.82,32a9.72,9.72,0,0,0-2.85.41,8.43,8.43,0,0,0-2.44,1.15,7.72,7.72,0,0,0-3.06,4.19Z"/>
            <path d="M182.79,3.52V30a16.6,16.6,0,0,1,11.35-4.47,16.83,16.83,0,0,1,12.18,4.7,15.44,15.44,0,0,1,4.86,11.62,15.78,15.78,0,0,1-4.9,11.88,17.87,17.87,0,0,1-23.49.51v3.26h-8.35V3.52Zm19.85,38.61a9.83,9.83,0,0,0-2.82-7.28A9.66,9.66,0,0,0,192.66,32a10.37,10.37,0,0,0-7.49,2.78,9.48,9.48,0,0,0-2.86,7.16,9.6,9.6,0,0,0,2.82,7.25,10.14,10.14,0,0,0,7.42,2.78,9.92,9.92,0,0,0,7.2-2.78A9.4,9.4,0,0,0,202.64,42.13Z"/>
        </g>
    </svg>
)

const RockHand = () => (
    <svg id="rockhand" viewBox="0 0 30 60">
    <g>
        <path d="M20.79,26.32l.15.06.23.1.12.06.31.19h0v-.65h0V21.56a2.89,2.89,0,0,0-5.77,0v4.23l4.14.36A3.07,3.07,0,0,1,20.79,26.32Z"/>
        <path d="M10.68,25.37h.05c.1,0,.2,0,.31,0l.21,0h.14l3.51.31V19a2.89,2.89,0,1,0-5.77,0v6.71a4.84,4.84,0,0,1,1.25-.29Z"/>
        <path d="M7,27.2a4.91,4.91,0,0,1,1.17-1.06V4.92a2.89,2.89,0,0,0-5.77,0v29.7l4-6.47A4.44,4.44,0,0,1,7,27.2Z"/>
        <path d="M2.59,43.62l.08.06,5.18,5L5.18,58H26.71l-.94-9.87,3-12.26A5.57,5.57,0,0,0,29,34.19a5.67,5.67,0,0,0-.18-1.38v0c-.17-.77-.34-1.55-.51-2.31-.31-1.38-.59-2.78-.94-4.15A14.27,14.27,0,0,1,27,24.19a47.28,47.28,0,0,1-.1-4.77V11.7a2.18,2.18,0,1,0-4.35,0v16A3.23,3.23,0,0,1,23,29.07s0,.07,0,.11a4.17,4.17,0,0,1,0,.5,3.29,3.29,0,0,1-1.14,2.25,3,3,0,0,1-.52.36l-.09.05-.18.09-.11,0-.17.06-.12,0-.17.05-.12,0-.18,0h-.12l-.2,0h-.41l-6.22-.5-1.91,2.6a13.42,13.42,0,0,1,6.71.27,3.39,3.39,0,0,1,.41.15h0l.36.16s.05,0,.08,0l.32.15.1.06a2.69,2.69,0,0,1,.29.16l.12.07.27.17.13.09a1.44,1.44,0,0,1,.25.18l.14.1.25.2.12.1.36.34a.4.4,0,0,1,0,.57h0a.42.42,0,0,1-.29.12h0a.4.4,0,0,1-.15,0,.42.42,0,0,1-.14-.09c-.16-.16-.34-.31-.51-.46l-.09-.07-.53-.38-.08,0c-3.4-2.17-7.83-1.09-8-1l-1,.25a.41.41,0,0,1-.43-.17.39.39,0,0,1,0-.47l2.15-2.94.55-.76a.42.42,0,0,1,.36-.16l1,.07,1.79.15,3.7.29a2.46,2.46,0,0,0,1.8-.59,3.44,3.44,0,0,0,.27-.27h0a2.47,2.47,0,0,0,.59-1.42,1.31,1.31,0,0,0,0-.28v-.07a.13.13,0,0,0,0-.06.77.77,0,0,0,0-.15.28.28,0,0,0,0-.09s0-.07,0-.1h0l0-.08a.24.24,0,0,0,0-.08,2.57,2.57,0,0,0-.48-.87h0A2.51,2.51,0,0,0,19.92,27l-4.08-.35-4.55-.4h-.55l-.27,0-.38.05-.2.05-.15,0-.26.09-.06,0-.29.11h0a4.07,4.07,0,0,0-1.23.86c-.09.1-.18.19-.26.29a4.16,4.16,0,0,0-.49.81l0,0L1.66,37.39a3.45,3.45,0,0,0-.31.75A5.19,5.19,0,0,0,1,39.93a5.08,5.08,0,0,0,1.51,3.62Z"/>
    </g>
</svg>
)

class SongsTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            page: 1,
            totalPages: 1,

            musics: [{
                id: 1,
                title: "Song name",
                rate: 0,
                date_record: "2018-01-01",
                artist: "Artist"
            }]
        }
    }

    componentWillMount(){
        axios.get('https://pmweb-dev.github.io/musics.json').then((res) => {
            const musics = res.data.musics;
            const totalPages = Math.ceil(musics.length/10);
            
            this.setState({musics});
            this.setState({totalPages});
        });
    }

    setPage(page){
        this.setState({page});
    }

    render(){
        let tablehtml = [];

        let limit = (this.state.page * 10) > this.state.musics.length ? this.state.musics.length : (this.state.page * 10);
        for(let i = ((this.state.page - 1) * 10); i < limit; i++){
            tablehtml.push(
                <tr key={i}>
                    <td>{this.state.musics[i].id}</td>
                    <td>{this.state.musics[i].title}</td>
                    <td>{this.state.musics[i].rate}</td>
                    <td>{this.state.musics[i].date_record}</td>
                    <td>{this.state.musics[i].artist}</td>
                </tr>
            );
        }

        let pages = [];
        for(let i = 1; i <= this.state.totalPages; i++){
            pages.push(
                <li key={i} onClick={() => this.setPage(i)} className={i == this.state.page ? "selected" : ""}>{i}</li>
            );
        }

        return (
            <div>
                <div className="table_holder">
                    <table cellSpacing="0">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Título</th>
                                <th>Avaliação</th>
                                <th>Data de gravação</th>
                                <th>Artista</th>
                            </tr>

                            {tablehtml}
                        </tbody>
                    </table>
                </div>

                <ul>
                    <li className="first" onClick={() => this.setPage(this.state.page - 1 <= 1 ? 1 : this.state.page - 1)}>{"<"}</li>
                    {pages}
                    <li className="last" onClick={() => this.setPage(this.state.page + 1 > this.state.totalPages ? this.state.totalPages : this.state.page + 1)}>{">"}</li>
                </ul>
            </div>
        );
    }
}

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cards: {
                hours_music: {
                    hours: 0,
                    percent_diference: 0
                },
                
                quantity_bands: {
                    bands: 0,
                    percent_diference: 0
                },

                lost_artists: {
                    losts: 0,
                    percent_diference: 0
                }
            },

            hours_quantity: {
                hours_quantity: {
                    hours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    quantity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            },

            musics: [{
                id: 1,
                title: "Song name",
                rate: 0,
                date_record: "2018-01-01",
                artist: "Artist"
            }]
        };
    }

    componentDidMount(){
        axios.get('https://pmweb-dev.github.io/resumeCards.json').then((res) => {
            const cards = res.data.cards;
            this.setState({cards});
        });

        axios.get('https://pmweb-dev.github.io/hoursQuantity.json').then((res) => {
            const hours_quantity = res.data.hours_quantity;
            this.setState({hours_quantity});
        });
    }

    render(){
        let options = {
            title: {
                text: "Horas de músicas x Quantidade de bandas",
                align: "left",
                margin: 50
            },
            
            legend: {
                verticalAlign: "top",
                align: "right",
                floating: true,
                symbolWidth: 15,
                itemDistance: 40,

                itemStyle: {
                    fontWeight: 400
                }
            },

            xAxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
            },

            yAxis: [{
                labels: {
                   format: '{value}h'
                },
                title: {
                   enabled: false
                }
             }, {
                title: {
                   enabled: false
                },
                opposite: true
             }],

            series: [{
                data: this.state.hours_quantity.hours,
                color: "#7ba8ff",
                type: "spline",
                name: "Horas de música",
                tooltip: {
                    valueSuffix: 'h'
                },

                marker: {
                    enabled: false
                }
            }, {
                data: this.state.hours_quantity.quantity,
                color: "#5dffb9",
                type: "spline",
                name: "Quantidade de bandas",
                yAxis: 1,

                marker: {
                    enabled: false
                }
            }]
        };
        
        return(
            <div id="dashboard">
                <div className="container">
                    <div id="topbar">
                        <Logo />
                        <RockHand />
                    </div>

                    <div className="content">
                        <h2>Overview</h2>

                        <div id="widgets">
                            <Widget
                                options={{
                                    title: "Horas de música tocadas",
                                    type: "song",
                                    value: this.state.cards.hours_music.hours + "h",
                                    percentage: this.state.cards.hours_music.percent_diference + "%",
                                    percentageClass: this.state.cards.hours_music.percent_diference > 50 ? "positive" : "negative"
                                }}
                            />

                            <Widget
                                options={{
                                    title: "Horas de música tocadas",
                                    value: this.state.cards.quantity_bands.bands,
                                    type: "song",
                                    percentage: this.state.cards.quantity_bands.percent_diference + "%",
                                    percentageClass: this.state.cards.quantity_bands.percent_diference > 50 ? "positive" : "negative"
                                }}
                            />

                            <Widget
                                options={{
                                    title: "Horas de música tocadas",
                                    value: this.state.cards.lost_artists.losts,
                                    percentage: this.state.cards.lost_artists.percent_diference + "%",
                                    percentageClass: this.state.cards.lost_artists.percent_diference > 50 ? "positive" : "negative"
                                }}
                            />
                        </div>

                        <div id="chart">
                            <div className="chart_holder">
                                <Chart options={options} />
                            </div>
                        </div>

                        <div id="songstable">
                            <h2>Músicas</h2>

                            <SongsTable
                                options={{
                                    data: this.state.musics
                                }}
                            />
                        </div>
                    </div>

                    <div id="bottombar">
                        <Logo />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));