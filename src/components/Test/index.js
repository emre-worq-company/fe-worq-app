"use client";

import React from "react"
import { switchTheme, switchLang } from "@/redux/slices/common";
import { useSelector, useDispatch } from "react-redux";

import { Button } from 'primereact/button';

function Test() {
    const themeText = useSelector((state) => state.common.theme);
    const langText = useSelector((state) => state.common.lang);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col px-5 py-5">
            <div className="mb-1 text-center">{themeText} - {langText}</div>
            <Button className="bg-primary px-1 py-1 mb-1" onClick={() => dispatch(switchTheme(!themeText))}>
                <span className="text-white"> update theme </span>
            </Button>
            <Button className="bg-primary px-1 py-1" onClick={() => dispatch(switchLang(!langText))}>
                <span className="text-white"> change lang </span>
            </Button>
        </div>
    )
}

export default Test