/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import styles from "./detail.module.scss";
import { useRouter } from "next/router";
import clienteAxios from "../../config/axios";
import { useItem } from "../../context/items/itemState";

export default function Detail({ item = {}, description = "" }) {
    console.log(item, "item");

    return (
        <div className={styles.detail}>
            {item && (
                <>
                    <div className={styles.detail__product}>
                        <img
                            src={item.pictures ? item.pictures[0].url : "/images/tablet.jpg"}
                            //style={{ width: "250px", height: "400px" }}
                            alt="imagen del producto"
                        />

                        <div className={styles.detail__product__text}>
                            <p>Nuevo - {item.sold_quantity ? item.sold_quantity : "0"} vendidos</p>
                            <h2>{item.title ? item.title : "--"}</h2>

                            <h1>$ {item.price ? item.price : "--"}</h1>

                            <button>Comprar</button>
                        </div>
                    </div>
                    <div className={styles.detail__description}>
                        <h2>Descripción del producto</h2>
                        <p>{description ? description : "Producto sin Descripción"}</p>
                    </div>
                </>
            )}
        </div>
    );
}
