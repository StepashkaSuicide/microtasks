import React from 'react';


export type AppType = {
    topCars: Array<topCarsType>
}

type topCarsType ={
    manufacturer:string
    model:string
    id: number
}

const Cars = (props: AppType) => {


    return (
        <>
            {props.topCars.map((car=> {
                return (
                    <table key={car.id}>
                        <thead>
                        <tr>
                            <th>{car.manufacturer}</th>
                            <th>{car.model}</th>
                        </tr>
                        </thead>
                    </table>
                )
            }))}
        </>
    );
};

export default Cars;