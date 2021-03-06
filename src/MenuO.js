import React from 'react';
import AccordionTab from './AccordionTab';
import MenuItem from './MenuItem';
import AsadaFries from './AsadaFries';
import Nacho from './Nacho';
import ALaCarte from './ALaCarte';
import SideOrders from './SideOrders';
import Drinks from './Drinks';
import uuid from 'react-uuid';
import './MenuO.scss';
import HeaderOnline from './HeaderOnline';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';





function MenuO() {

    return (
        <div className="menuO">
            <HeaderOnline/>
            {/* Below is the menu at full screen */}

                <div className="menuO__full">
                    <Card>
                        <CardContent>
                            <Typography>
                        <h3>Burrito plate</h3>
                        <div className="menuO__bg "></div>
                        <MenuItem
                        title='Asada Dinner Plate'
                        price={8.50}
                        lemon='lemon'
                        salsa='salsa'
                        id={uuid()}
                        />
                        <MenuItem 
                        title='Chile Colorado Dinner Plate'
                        price={8.50}
                        id={uuid()}
                        />
                        <MenuItem 
                        title='Cabeza Dinner Plate'
                        price={8.88}
                        id={uuid()}
                        />
                        <MenuItem 
                        title='Chile Verde Dinner Plate'
                        price={8.50}
                        id={uuid()}
                        />
                        <MenuItem 
                        title='Chicken Burrito Plate'
                        price={8.50}
                        id={uuid()}
                        />
                        </Typography>
                        </CardContent>

                    </Card>

                    {/* Burrito */}
                    <Card>
                        <CardContent>
                        <Typography>
                        <h3>Burrito</h3>
                        <div className="menuO__bg1"></div>
                            <MenuItem 
                            title="Asada"
                            price={5.80}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Chicken"
                            price={5.80}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Lengua"
                            price={6.25}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Adovada"
                            price={5.80}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Chile Colorado"
                            price={5.80}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="All meat burritos"
                            price={8.45}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Cabeza"
                            price={6.25}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Bean and Rice"
                            price={3.25}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Chile verde"
                            price={5.80}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Beef"
                            price={5.80}
                            id={uuid()}
                            />
                        </Typography>
                    </CardContent>
                            </Card>
                    {/* plates*/}
                    <Card>
                        <CardContent>
                        <Typography>
                            <h3>Plates</h3>
                        <div className="menuO__bg2"></div>
                            <MenuItem 
                            title="2 enchiladas, 1 taco"
                            price={7.88}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="3 taquitos"
                            price={6.71}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Tostada"
                            price={6.25}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="2 taquitos"
                            price={5.00}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="3 tacos"
                            price={7.88}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="1 taco"
                            price={5}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="2 enchiladas"
                            price={6.71}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="2 tamales"
                            price={5}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="2 tacos"
                            price={5}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="taco, tamal"
                            price={6.71}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="1 enchilada"
                            price={5}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="2 tacos, 1 enchilada"
                            price={7.88}
                            id={uuid()}
                            />
                        </Typography>
                    </CardContent>
                            </Card>
                    {/* Salads */}
                    <Card>
                        <CardContent>
                        <Typography>
                            <h3>Salads</h3>
                            <div className="MenuO__bg3"></div>
                            <MenuItem 
                            title="Bean tostada"
                            price={4.16}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Concha"
                            price={7.88}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Tostada compuesta"
                            price={7.88}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="Taco salad"
                            price={7.88}
                            id={uuid()}
                            />
                            <MenuItem 
                            title="meat tostada"
                            price={5.08}
                            id={uuid()}
                            />
                        </Typography>
                    </CardContent>
                            </Card>
                            {/* Asada Fries*/}
                            <Card>
                                <CardContent>
                                <Typography>
                                    <h3>Asada fries</h3>
                                <div className="MenuO__bg4"></div>
                                <MenuItem
                                title="Asada fries (mini)"
                                price={8.50}
                                id={uuid()}
                                />
                                <MenuItem
                                title="Asada fries (large)"
                                price={10.25}
                                id={uuid()}
                                />
                                </Typography>
                                </CardContent>
                            </Card>
                            {/* Nachos & Chips */}
                            <Card>
                                <CardContent>
                                    <Typography>
                                        <h3>Nachos & chips</h3>
                                        <div className="MenuO__bg5"></div>
                                        <MenuItem 
                                            title="Chips & salsa"
                                            price={2.5}
                                            id={uuid()}
                                        />
                                        <MenuItem 
                                            title="Large nachos"
                                            price={8.50}
                                            id={uuid()}
                                        />
                                        <MenuItem 
                                            title="Chips & guacamole"
                                            price={3.75}
                                            id={uuid()}
                                        />
                                        <MenuItem 
                                            title="Chips & cheese"
                                            price={3.75}
                                            id={uuid()}
                                        />
                                        <MenuItem 
                                            title="Mini nachos"
                                            price={7.17}
                                            id={uuid()}
                                        />
                                    </Typography>
                                </CardContent>
                                </Card>
                </div>


            {/* Done with full screen  */}



            <div className="menuO__change">
            <AccordionTab title="Burrito plate">
                <div className="menuO__bg"></div>
                <MenuItem 
                title='Asada Dinner Plate'
                price={8.50}
                id={uuid()}
                />
                <MenuItem 
                title='Chile Colorado Dinner Plate'
                price={8.50}
                id={uuid()}
                />
                <MenuItem 
                title='Cabeza Dinner Plate'
                price={8.88}
                id={uuid()}
                />
                <MenuItem 
                title='Chile Verde Dinner Plate'
                price={8.50}
                id={uuid()}
                />
                <MenuItem 
                title='Chicken Burrito Plate'
                price={8.50}
                id={uuid()}
                />
            </AccordionTab>

            <AccordionTab title="Burrito">
                <div className="menuO__bg1"></div>
                <MenuItem 
                title="Asada"
                price={5.80}
                id={uuid()}
                />
                <MenuItem 
                title="Chicken"
                price={5.80}
                id={uuid()}
                />
                <MenuItem 
                title="Lengua"
                price={6.25}
                id={uuid()}
                />
                <MenuItem 
                title="Adovada"
                price={5.80}
                id={uuid()}
                />
                <MenuItem 
                title="Chile Colorado"
                price={5.80}
                id={uuid()}
                />
                <MenuItem 
                title="All meat burritos"
                price={8.45}
                id={uuid()}
                />
                <MenuItem 
                title="Cabeza"
                price={6.25}
                id={uuid()}
                />
                <MenuItem 
                title="Bean and Rice"
                price={3.25}
                id={uuid()}
                />
                <MenuItem 
                title="Chile verde"
                price={5.80}
                id={uuid()}
                />
                <MenuItem 
                title="Beef"
                price={5.80}
                id={uuid()}
                />
            </AccordionTab>

            <AccordionTab title="Plates">
                <div className="menuO__bg2"></div>
                <MenuItem 
                title="2 enchiladas, 1 taco"
                price={7.88}
                id={uuid()}
                />
                <MenuItem 
                title="3 taquitos"
                price={6.71}
                id={uuid()}
                />
                <MenuItem 
                title="Tostada"
                price={6.25}
                id={uuid()}
                />
                <MenuItem 
                title="2 taquitos"
                price={5.00}
                id={uuid()}
                />
                <MenuItem 
                title="3 tacos"
                price={7.88}
                id={uuid()}
                />
                <MenuItem 
                title="1 taco"
                price={5.00}
                id={uuid()}
                />
                <MenuItem 
                title="2 enchiladas"
                price={6.71}
                id={uuid()}
                />
                <MenuItem 
                title="2 tamales"
                price={5.00}
                id={uuid()}
                />
                <MenuItem 
                title="2 tacos"
                price={5.00}
                id={uuid()}
                />
                <MenuItem 
                title="taco, tamal"
                price={6.71}
                id={uuid()}
                />
                <MenuItem 
                title="1 enchilada"
                price={5.00}
                id={uuid()}
                />
                <MenuItem 
                title="2 tacos, 1 enchilada"
                price={7.88}
                id={uuid()}
                />
            </AccordionTab>

            <AccordionTab title="Salads">
                <div className="MenuO__bg3"></div>
                <MenuItem 
                title="Bean tostada"
                price={4.16}
                id={uuid()}
                />
                <MenuItem 
                title="Concha"
                price={7.88}
                id={uuid()}
                />
                <MenuItem 
                title="Tostada compuesta"
                price={7.88}
                id={uuid()}
                />
                <MenuItem 
                title="Taco salad"
                price={7.88}
                id={uuid()}
                />
                <MenuItem 
                title="meat tostada"
                price={5.08}
                id={uuid()}
                />
            </AccordionTab>

            <AccordionTab title="Asada Fries">
                <div className="menuO__bg4"></div>
               <AsadaFries/>
            </AccordionTab>
            <AccordionTab title="Nachos & Chips">
                <Nacho/>
            </AccordionTab>
            <AccordionTab title="A La Carte">
                <ALaCarte/>
            </AccordionTab>
            <AccordionTab title="Side Orders">
                <SideOrders/>
            </AccordionTab>
            <AccordionTab title="Soft Drinks">
                <Drinks/>
            </AccordionTab>
                </div>
        </div>
    )
}

export default MenuO;
