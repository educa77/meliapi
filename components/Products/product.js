/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import styles from "./products.module.scss";
import Link from "next/link";

export default function Product({ item }) {
    console.log(item, "item");

    return (
        <div className={styles.product}>
            <Link
                href={item.id ? `/items/?id=${item.id}` : "#"}
                as={item.id ? `/items/${item.id}` : "#"}>
                <a>
                    <img
                        src={item.thumbnail ? item.thumbnail : "/images/tablet.jpg"}
                        alt="imagen del producto"
                    />
                    <div className={styles.products__details}>
                        <h1>$ {item.price ? item.price : ""}</h1>
                        <h2>{item.title ? item.title : ""}</h2>
                    </div>
                    <div>
                        <span>
                            {item.address && item.address.city_name ? item.address.city_name : ""}
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    );
}
