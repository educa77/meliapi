/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import styles from "./search-bar.module.scss";
import { CgSearch } from "react-icons/cg";
import clienteAxios from "../../config/axios";
import { useItem } from "../../context/items/itemState";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBar() {
    const [product, searchProduct] = useState("");
    const router = useRouter();

    // Extrae el context de la aplicacion
    const context = useItem();
    const { setItems } = context;

    //  Lee los valores del formulario
    const handleChange = (e) => {
        searchProduct(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Inserta los productos de la busqueda en el state
        if (product) {
            setItems(product);
            router.push(`/items/search?q=${product}`);
        }
    };

    return (
        <div className={styles.nav}>
            <div className={styles.search__bar__container}>
                <Link href="/" passHref>
                    <img src="/images/logo.png" alt="meli logo" />
                </Link>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        name="search"
                        value={product}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        <CgSearch />
                    </button>
                </form>
            </div>
        </div>
    );
}
