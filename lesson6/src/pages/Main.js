import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../components/Tabs";
import One from "../components/one/One";
import Two from "../components/two/Two";
import Three from "../components/three/Three";
import Four from "../components/four/Four";
import Five from "../components/five/Five";



const VALUES = {
    itemOne : 'one',
    itemTwo : 'two',
    itemThree: 'three',
    itemFour: 'four',
    itemFive: 'five'
}



const Main = () => {
    const categoriesSelect = [
        {value: VALUES.itemOne, label :'One'},
        {value: VALUES.itemTwo, label: 'two'},
        {value: VALUES.itemThree, label:'Three'},
        {value: VALUES.itemFour, label: 'Four'},
        {value: VALUES.itemFive, label: 'Five'}
    ]

    const [value,setValue]= useState(categoriesSelect[0].value)

    const swiperImages = [
        { url: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-4.jpg' }
    ]
    const swiperCardImages = [
        { url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' },
        { url: 'https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?cs=srgb&dl=pexels-mo-eid-9454915.jpg&fm=jpg' },
        { url: 'https://i.pinimg.com/474x/6c/12/fd/6c12fdc402726c513901a61f512ba3c6.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg'},
    ]
    const swiperGalleryImage = [
        {url: 'https://swiperjs.com/demos/images/nature-1.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-2.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-3.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-4.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-5.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-6.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-7.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-8.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-9.jpg'},
        {url: 'https://swiperjs.com/demos/images/nature-10.jpg'}
    ]

    const parallax = [
        { url: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    ]
    const parallaxText = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n' +
                '                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\n' +
                '                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.\n' +
                '                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.\n' +
                '                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\n' +
                '                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,\n' +
                '                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.'
        },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n' +
                '                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\n' +
                '                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.\n' +
                '                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.\n' +
                '                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\n' +
                '                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,\n' +
                '                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.'
        },{ title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n' +
                '                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\n' +
                '                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.\n' +
                '                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.\n' +
                '                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\n' +
                '                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,\n' +
                '                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.'
        },
    ]
    const GetCategories = ({value})=>{
        switch (value){
            case VALUES.itemOne:{
                return <One swiperImage={swiperImages}/>
            }
            case VALUES.itemTwo:{
                return <Two swiperCardImage={swiperCardImages}/>
            }
            case VALUES.itemThree:{
                return <Three swiperCardImage={swiperCardImages}/>
            }
            case VALUES.itemFour:{
                return <Four swiperCardImage={swiperGalleryImage}/>
            }
            case VALUES.itemFive:{
                return <Five swiperCardImage={parallax} title={parallaxText}/>
            }
            default: return <p></p>
        }
    }
    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </Container>
    );
}

export default Main;