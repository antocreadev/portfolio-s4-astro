import React from 'react';
import * as echarts from "echarts";
import ReactEchart from "echarts-for-react";

const RadarChart = () => {
    const option = {
        radar: {
            indicator: [
                { name: 'Comprendre', max: 10 },
                { name: 'Développper', max: 10 },
                { name: 'Exprimer', max: 10 },
                { name: 'Concevoir', max: 10 },
            ]
        },
        series: [
            {
                name: 'Compétences',
                type: 'radar',
                data: [
                    {
                        value: [8, 6, 9, 5],
                        name: 'Compétences'
                    },

                ]
            }
        ]
    }
    return (
        <div>
            <ReactEchart id="chart" option={option} />
        </div>
    );
}

export default RadarChart;
