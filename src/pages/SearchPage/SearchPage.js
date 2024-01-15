import React from "react"
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation";
import useProtectedPage from "../../hooks/useProtectedPage";

export const SearchPage = () => {
    useProtectedPage();

    return (
        <>
            <Header title="Busca" />
            <div>
                <Feed
                    isSearch="true"
                />
            </div>
            <Navigation />
        </>
    )
};

