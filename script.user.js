// ==UserScript==
// @name         Pinterest Custom Themes
// @namespace    https://github.com/mustafachyi
// @version      0.1
// @description  Customize Pinterest's appearance with custom themes
// @author       mustafachyi
// @match        *://*.pinterest.com/*
// @match        *://*.pinterest.ca/*
// @match        *://*.pinterest.co.uk/*
// @match        *://*.pinterest.fr/*
// @match        *://*.pinterest.de/*
// @match        *://*.pinterest.es/*
// @match        *://*.pinterest.it/*
// @match        *://*.pinterest.jp/*
// @match        *://*.pinterest.ru/*
// @match        *://*.pinterest.com.au/*
// @match        *://*.pinterest.at/*
// @match        *://*.pinterest.ch/*
// @match        *://*.pinterest.se/*
// @match        *://*.pinterest.dk/*
// @match        *://*.pinterest.ie/*
// @match        *://*.pinterest.co.nz/*
// @match        *://*.pinterest.com.mx/*
// @match        *://*.pinterest.cl/*
// @match        *://*.pinterest.pt/*
// @match        *://*.pinterest.ph/*
// @match        *://*.pinterest.co.kr/*
// @match        *://*.pinterest.co.in/*
// @match        *://*.pinterest.com.br/*
// @match        *://*.pinterest.nz/*
// @match        *://*.pinterest.com.vn/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    // ===============================
    // 1. Theme Configuration Object
    // ===============================
    const themeConfig = {
        colors: {
            bg: "#1a1a1a",
            obsidian: "#1E2433",
            secondary: "#2B3548",
            text: "#FFFFFF",
            muted: "#A8B3C7",
            hover: "#323D54",
            focus: "#3A4661",
            border: "#4D5975",
            suggestion: "#2A3447",
            suggestionHover: "#384561",
            suggestionActive: "#445373",
            navBg: "#1E2433",
            navBorder: "#2B3548",
            navIconFill: "#A8B3C7",
            navIconHover: "#FFFFFF",
            navIconActive: "#FFFFFF",
            navActiveIndicator: "#445373"
        },
        sizes: {
            borderWidth: "2px",
            searchHeight: "48px",
            containerHeight: "56px",
            searchRadius: "24px",
            iconSize: "16px",
            containerWidth: "407px",
            suggestionWidth: "123.365px",
            navWidth: "80px",
            navIconSize: "24px",
            navButtonSize: "56px",
            navSpacing: "16px",
            navIndicatorSize: "32px"
        },
        shadows: {
            dropdown: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        }
    };

    // ====================================
    // 2. CSS Strings – Categorized by Role
    // ====================================

    // 2.1 Preload & Base Styles (must load early)
    const preloadCSS = `
        /* Hide page until theme is applied */
        html {
            visibility: hidden;
        }
        html.themed {
            visibility: visible;
        }

        /* Define CSS Variables early */
        :root {
            ${(() => {
                const { colors, sizes, shadows } = themeConfig;
                return Object.entries({ ...colors, ...sizes, ...shadows })
                    .map(([name, value]) => `--theme-${name}: ${value};`)
                    .join("\n");
            })()}
        }

        /* Early Button Styling */
        /* Save Button */
        [data-test-id="PinBetterSaveButton"] {
            position: relative !important;
            z-index: 2 !important;
        }

        [data-test-id="PinBetterSaveButton"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="PinBetterSaveButton"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7 {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            padding: 8px 16px !important;
            min-height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="PinBetterSaveButton"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        /* Saved Button */
        [data-test-id="saved-button"] {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
            z-index: 2 !important;
        }

        [data-test-id="saved-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ {
            background-color: var(--theme-focus) !important;
            border: var(--theme-borderWidth) solid var(--theme-border) !important;
            border-radius: 8px !important;
            padding: 8px 16px !important;
            min-height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="saved-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        /* Common Button Text Styling */
        [data-test-id="PinBetterSaveButton"] .B1n.tg7.IZT.tBJ.dyH.iFc.sAJ.H2s,
        [data-test-id="saved-button"] .B1n.tg7.IZT.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
        }

        /* Focus States */
        [data-test-id="PinBetterSaveButton"] button:focus-visible,
        [data-test-id="saved-button"]:focus-visible {
            outline: none !important;
        }

        [data-test-id="PinBetterSaveButton"] button:focus-visible .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7,
        [data-test-id="saved-button"]:focus-visible .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ {
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active States */
        [data-test-id="PinBetterSaveButton"] button:active .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7,
        [data-test-id="saved-button"]:active .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ {
            transform: scale(0.98) translateZ(0) !important;
        }

        /* Prevent scrollbar flash */
        ::-webkit-scrollbar {
            width: 8px !important;
            height: 8px !important;
        }
        ::-webkit-scrollbar-track {
            background: var(--theme-obsidian) !important;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--theme-border) !important;
            border-radius: 4px !important;
            border: 2px solid var(--theme-obsidian) !important;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: var(--theme-hover) !important;
        }
        * {
            scrollbar-width: thin !important;
            scrollbar-color: var(--theme-border) var(--theme-obsidian) !important;
        }

        /* Base backgrounds */
        body, 
        #__PWS_ROOT__,
        #__PWS_ROOT__ > div,
        .appContent,
        .appContent > div {
            background-color: var(--theme-obsidian) !important;
        }

        /* Remove pin footer area */
        div[data-test-id="pinrep-footer"],
        div[data-test-id="pinrep-footer"] + div {
            display: none !important;
        }

        /* Header background and divider */
        div[data-test-id="header-background"] {
            background-color: var(--theme-obsidian) !important;
            border-bottom: 1px solid var(--theme-border) !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
        }

        /* Home Feed Background */
        div[data-test-id="homefeed-feed"] {
            background-color: var(--theme-obsidian) !important;
            margin-top: 16px !important;
        }

        /* Vertical Navigation Base Styles */
        #VerticalNavContent {
            background-color: var(--theme-navBg) !important;
            border-right: 1px solid var(--theme-navBorder) !important;
            width: var(--theme-navWidth) !important;
            height: 100vh !important;
            z-index: 672 !important;
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
        }

        *:focus {
            outline: none !important;
            box-shadow: none !important;
            }

        /* Add to preloadCSS for immediate styling */
        [data-test-id="closeup-action-items"] {
            background-color: var(--theme-obsidian) !important;
            border: none !important;
            box-shadow: none !important;
        }

        /* Style any direct children to maintain consistency */
        [data-test-id="closeup-action-items"] > div {
            background-color: var(--theme-obsidian) !important;
        }

        /* More Options Button */
        [data-test-id="closeup-more-options"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="closeup-more-options"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            height: 40px !important;
            width: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="closeup-more-options"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="closeup-more-options"] svg {
            width: 20px !important;
            height: 20px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="closeup-more-options"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Focus state */
        [data-test-id="closeup-more-options"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="closeup-more-options"] button:focus-visible .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="closeup-more-options"] button:active .SPw._O1.KS5.mQ8.K1k.uPZ {
            transform: scale(0.95) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Board Selection Button */
        [data-test-id="board-selection-item-selected"] {
            width: 100% !important;
        }

        [data-test-id="board-selection-item-selected"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            width: 100% !important;
        }

        [data-test-id="board-selection-item-selected"] .RCK.Hsu.USg.adn.NTm.KhY.iyn.S9z.F10.xD4.i1W.V92.qQ7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            padding: 8px 12px !important;
            min-height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        /* Text styling */
        [data-test-id="board-selection-item-selected"] .X8m.zDA.Sxk.CKL.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            margin-right: 8px !important;
        }

        /* Dropdown arrow icon */
        [data-test-id="board-selection-item-selected"] svg {
            width: 12px !important;
            height: 12px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease, transform 0.2s ease !important;
        }

        /* Hover state */
        [data-test-id="board-selection-item-selected"] .RCK.Hsu.USg.adn.NTm.KhY.iyn.S9z.F10.xD4.i1W.V92.qQ7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: translateY(-1px) translateZ(0) !important;
        }

        [data-test-id="board-selection-item-selected"] button:hover svg {
            fill: var(--theme-navIconHover) !important;
            transform: translateY(1px) !important;
        }

        /* Focus state */
        [data-test-id="board-selection-item-selected"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="board-selection-item-selected"] button:focus-visible .RCK.Hsu.USg.adn.NTm.KhY.iyn.S9z.F10.xD4.i1W.V92.qQ7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="board-selection-item-selected"] button:active .RCK.Hsu.USg.adn.NTm.KhY.iyn.S9z.F10.xD4.i1W.V92.qQ7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            transform: translateY(0) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Share Button */
        [data-test-id="closeup-share-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="closeup-share-button"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            height: 40px !important;
            width: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="closeup-share-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="closeup-share-button"] svg {
            width: 20px !important;
            height: 20px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="closeup-share-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Focus state */
        [data-test-id="closeup-share-button"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="closeup-share-button"] button:focus-visible .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="closeup-share-button"] button:active .SPw._O1.KS5.mQ8.K1k.uPZ {
            transform: scale(0.95) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Reaction Button */
        [data-test-id="react-button"] {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
            margin: 0 4px !important;  /* Add spacing between buttons */
        }

        [data-test-id="react-button"] .INd.imm.zI7.iyn.Hsu {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            height: 40px !important;
            width: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="react-button"]:hover .INd.imm.zI7.iyn.Hsu {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        /* Heart icon styling */
        [data-test-id="react-button"] .Jea.KS5.mQ8.zI7.iyn.Hsu {
            width: 20px !important;
            height: 20px !important;
            opacity: 0.8 !important;
            transition: opacity 0.2s ease !important;
            filter: brightness(0) saturate(100%) invert(80%) sepia(11%) saturate(343%) hue-rotate(181deg) brightness(87%) contrast(85%) !important;
        }

        [data-test-id="react-button"]:hover .Jea.KS5.mQ8.zI7.iyn.Hsu {
            opacity: 1 !important;
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) !important;
        }

        /* Focus state */
        [data-test-id="react-button"]:focus-visible {
            outline: none !important;
        }

        [data-test-id="react-button"]:focus-visible .INd.imm.zI7.iyn.Hsu {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="react-button"]:active .INd.imm.zI7.iyn.Hsu {
            transform: scale(0.95) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Add spacing to other action buttons */
        [data-test-id="closeup-share-button"],
        [data-test-id="closeup-more-options"] {
            margin: 0 4px !important;
        }

        /* Container spacing fix */
        [data-test-id="closeup-action-items"] {
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            padding: 0 4px !important;
        }

        /* Reactions Count Button */
        [data-test-id="reactions-count-button"] {
            color: var(--theme-text) !important;
        }

        [data-test-id="reactions-count-button"] * {
            color: var(--theme-text) !important;
        }

        [data-test-id="reactions-count-button"]:hover {
            opacity: 0.9 !important;
        }

        /* Closeup Image Border Radius Override */
        [data-test-id="closeup-image"],
        [data-test-id="closeup-image"] > div {
            border-radius: 32px !important;
        }

        /* Override any inline styles */
        [data-test-id="closeup-image"] [style*="border-radius"],
        [data-test-id="closeup-image"] > div[style*="border-radius"] {
            border-radius: 32px !important;
        }

        /* Ensure child images also get the radius */
        [data-test-id="closeup-image"] img {
            border-radius: 32px !important;
        }

        /* Add note to self text color */
        [data-test-id="add-note-to-self"] {
            color: var(--theme-text) !important;
        }

        [data-test-id="add-note-to-self"] * {
            color: var(--theme-text) !important;
        }
    `;

    // 2.2 Main CSS for Search, Suggestions, Navigation, and Miscellaneous Elements
    const mainCSS = `
        /* ============================
           Search Box and Its Contents
        ============================ */
        div[data-test-id="search-box-container"] {
            min-width: var(--theme-containerWidth) !important;
            position: relative !important;

            style { display: none !important; }

            & > div[data-test-id="button-container"] {
                height: var(--theme-containerHeight) !important;
            }

            /* Search inner container */
            & .Jea.s2n {
                background-color: var(--theme-secondary) !important;
                height: var(--theme-searchHeight) !important;
                border-radius: var(--theme-searchRadius) !important;
                border: var(--theme-borderWidth) solid transparent !important;
                position: relative !important;
                z-index: 1 !important;
                transition: background-color 0.2s ease, border-color 0.2s ease !important;

                /* Input wrapper */
                & .Jea.KS5.XiG.ujU {
                    padding: 0 0 0 16px !important;
                    height: 100% !important;
                    display: flex !important;
                    align-items: center !important;
                    position: relative !important;
                    z-index: 2 !important;
                    background: none !important;
                }

                /* Icon container */
                & .Eqh.H-G {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    position: relative !important;
                    z-index: 3 !important;

                    /* Search icon */
                    & svg {
                        fill: var(--theme-muted) !important;
                        color: var(--theme-muted) !important;
                        opacity: 1 !important;
                        height: var(--theme-iconSize) !important;
                        width: var(--theme-iconSize) !important;
                        transition: fill 0.2s ease, color 0.2s ease, opacity 0.2s ease !important;
                    }
                }

                /* Input container */
                & .ujU {
                    height: 100% !important;
                    position: relative !important;
                    z-index: 3 !important;

                    /* Input field */
                    & input[data-test-id="search-box-input"] {
                        background: none !important;
                        border: none !important;
                        color: var(--theme-text) !important;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                        font-size: 16px !important;
                        font-weight: normal !important;
                        height: 100% !important;
                        outline: none !important;
                        padding: 0 16px !important;
                        width: 100% !important;
                        -webkit-text-fill-color: var(--theme-text) !important;
                        position: relative !important;
                        z-index: 3 !important;

                        &::placeholder {
                            color: var(--theme-muted) !important;
                            -webkit-text-fill-color: var(--theme-muted) !important;
                            opacity: 1 !important;
                            transition: color 0.2s ease, opacity 0.2s ease !important;
                        }
                    }
                }

                /* Hover state */
                &:hover {
                    background-color: var(--theme-hover) !important;
                    border-color: var(--theme-border) !important;

                    & svg {
                        fill: var(--theme-text) !important;
                        color: var(--theme-text) !important;
                        opacity: 1 !important;
                    }

                    & input::placeholder {
                        color: var(--theme-text) !important;
                        -webkit-text-fill-color: var(--theme-text) !important;
                        opacity: 0.9 !important;
                    }
                }

                /* Focus state */
                &:focus-within {
                    background-color: var(--theme-focus) !important;
                    border-color: var(--theme-border) !important;

                    & svg {
                        fill: var(--theme-text) !important;
                        color: var(--theme-text) !important;
                        opacity: 1 !important;
                    }

                    & input::placeholder {
                        color: var(--theme-text) !important;
                        -webkit-text-fill-color: var(--theme-text) !important;
                        opacity: 1 !important;
                    }
                }
            }
        }

        /* ============================
           Suggestions and Typeahead
        ============================ */
        #SuggestionsMenu {
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
            border-radius: 0 0 16px 16px !important;
            box-shadow: var(--theme-dropdown) !important;
            margin-top: 4px !important;
            display: block !important;
        }

        div[data-test-id="typeaheadResults"],
        div[data-test-id="typeaheadResults"] > div,
        div[data-test-id="typeaheadResults"] .imm,
        div[data-test-id="typeaheadResults"] .sLG,
        div[data-test-id="typeaheadResults"] .zI7,
        div[data-test-id="typeaheadResults"] .iyn,
        div[data-test-id="typeaheadResults"] .Hsu,
        div[data-test-id="typeaheadResults"] .jzS,
        div[data-test-id="typeaheadResults"] .un8,
        div[data-test-id="typeaheadResults"] .L4V,
        div[data-test-id="typeaheadResults"] .jDD,
        div[data-test-id="typeaheadResults"] .xuA,
        div[data-test-id="typeaheadResults"] div[style*="background-color"],
        div[data-test-id="typeaheadResults"] div[style*="backgroundColor"] {
            background-color: var(--theme-secondary) !important;
            width: auto !important;
            display: block !important;
        }

        div[data-test-id="search-suggestion"] .XiG[style*="background-color"],
        div[data-test-id="search-suggestion"] div[style*="backgroundColor"] {
            background-color: transparent !important;
        }

        div[data-test-id="typeaheadResults"][style*="overflow"] {
            scrollbar-color: var(--theme-border) var(--theme-secondary) !important;
            scrollbar-width: thin !important;
            max-width: 100% !important;
            width: 100% !important;
        }

        div[data-test-id="typeaheadResults"]::-webkit-scrollbar {
            width: 8px !important;
        }
        div[data-test-id="typeaheadResults"]::-webkit-scrollbar-track {
            background: var(--theme-secondary) !important;
        }
        div[data-test-id="typeaheadResults"]::-webkit-scrollbar-thumb {
            background-color: var(--theme-border) !important;
            border-radius: 4px !important;
        }

        /* Story Suggestions */
        div[data-test-id="search-story-suggestions-container"] {
            background-color: var(--theme-secondary) !important;
            padding: 16px 0 !important;
            width: 100% !important;
        }
        div[data-test-id="suggestion-group-heading"] {
            color: var(--theme-text) !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            padding: 0 16px 12px !important;
        }

        div[data-test-id="typeaheadResults"] {
            border-radius: 16px 16px 0 0 !important;
            overflow: hidden !important;
        }
        div[data-test-id="typeaheadResults"] > div.imm.sLG {
            border-radius: 16px 16px 0 0 !important;
        }

        .Jea.KS5.Kzl.i1W {
            width: calc(var(--theme-suggestionWidth) + 24px) !important;
            padding: 8px !important;
            text-align: center !important;
            display: block !important;
            overflow: hidden !important;
        }

        div[data-test-id="search-suggestion-text"] {
            color: var(--theme-muted) !important;
            font-size: 13px !important;
            line-height: 1.4 !important;
            width: calc(var(--theme-suggestionWidth) + 24px) !important;
            text-align: left !important;
            display: -webkit-box !important;
            -webkit-box-orient: vertical !important;
            -webkit-line-clamp: 2 !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            word-wrap: break-word !important;
            max-height: 40px !important;
            transition: color 0.15s ease, opacity 0.15s ease !important;
            background-color: transparent !important;
        }

        div[data-test-id="search-suggestion"] {
            transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
            margin: 2px !important;
            border-radius: 8px !important;
            overflow: hidden !important;
            width: var(--theme-suggestionWidth) !important;
            display: inline-block !important;
            vertical-align: top !important;
            will-change: transform !important;
            background-color: transparent !important;

            &:hover {
                transform: translateX(4px) !important;
                div[data-test-id="search-suggestion-text"] {
                    color: var(--theme-text) !important;
                    opacity: 0.9 !important;
                }
            }

            &[aria-selected="true"] {
                transform: translateX(4px) !important;
                div[data-test-id="search-suggestion-text"] {
                    color: var(--theme-text) !important;
                    opacity: 1 !important;
                }
            }

            & a {
                color: var(--theme-text) !important;
                text-decoration: none !important;
                display: block !important;
                background-color: transparent !important;
            }

            & div.zI7.iyn.Hsu,
            & div.Pj7.sLG.XiG.ho-.m1e,
            & div.XiG.zI7.iyn.Hsu:not([style*="background-color"]) {
                background-color: transparent !important;
            }
        }

        div[data-test-id="suggestion-group-heading"] {
            padding: 16px 16px 8px !important;
            color: var(--theme-text) !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-align: left !important;
        }

        .CXk.Jea.hs0.kzZ {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, var(--theme-suggestionWidth)) !important;
            gap: 16px !important;
            padding: 8px 16px !important;
            justify-content: start !important;
        }

        div[data-test-id="search-story-suggestions-container"] {
            padding: 0 !important;
            margin: 0 !important;
        }

        div[data-test-id="search-suggestion"] .zI7.iyn.Hsu {
            height: auto !important;
            width: var(--theme-suggestionWidth) !important;
        }

        /* ============================
           Image and Media Containers
        ============================ */
        div[data-test-id="search-suggestion-image-container"] {
            width: var(--theme-suggestionWidth) !important;
            height: var(--theme-suggestionWidth) !important;
            position: relative !important;
            overflow: hidden !important;
            border-radius: 4px !important;
        }
        div[data-test-id="search-suggestion-image-container"] .Pj7.sLG.XiG.eEj.m1e {
            width: var(--theme-suggestionWidth) !important;
            height: var(--theme-suggestionWidth) !important;
            position: relative !important;
            overflow: hidden !important;
        }
        div[data-test-id="search-suggestion-image-container"] img.hCL.kVc.L4E.MIw.N7A.XiG {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            display: block !important;
            position: relative !important;
            z-index: 1 !important;
        }
        div[data-test-id="search-suggestion-image-container"] .XiG.zI7.iyn.Hsu {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 0 !important;
        }

        /* ============================
           Removing Unnecessary Elements
        ============================ */
        div[data-test-id="search-suggestion"] .KPc,
        div[data-test-id="search-suggestion"] .T3r,
        div[data-test-id="search-suggestion"] div[class*="QLY"],
        div[data-test-id="search-suggestion"] div[class*="Rym"] {
            display: none !important;
        }
        div[data-test-id="typeaheadResults"] div[style*="background-color"]:not([data-test-id="search-suggestion-image-container"] *),
        div[data-test-id="search-suggestion"] div[style*="background-color"]:not([data-test-id="search-suggestion-image-container"] *) {
            background-color: transparent !important;
        }

        div[data-test-id="search-box-container"] *:focus,
        div[data-test-id="search-box-container"] *:focus-within,
        div[data-test-id="search-box-container"] *:focus-visible,
        div[data-test-id="search-box-container"] [style*="box-shadow"] {
            outline: none !important;
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
        }

        #searchBoxAccessibleText {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
        }

        /* ============================
           Feed and Content Adjustments
        ============================ */
        .appContent .zI7.iyn.Hsu[style*="padding-top"] {
            padding-top: 98px !important;
        }

        /* ============================
           Vertical Navigation Details
        ============================ */
        #VerticalNavContent > div {
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            padding: 0 0 calc(var(--theme-navSpacing) * 1.5) !important;
        }
        #VerticalNavContent .Jea.KS5.b8T.jzS.zI7.iyn.Hsu {
            display: flex !important;
            flex-direction: column !important;
            gap: var(--theme-navSpacing) !important;
            align-items: center !important;
            padding: var(--theme-navSpacing) 0 !important;
        }
        #VerticalNavContent .xuA {
            width: 100% !important;
            height: var(--theme-navButtonSize) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
        }
        #VerticalNavContent .DUt.Jea.KS5.mQ8.zI7.iyn.Hsu {
            height: var(--theme-navButtonSize) !important;
            width: var(--theme-navButtonSize) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
            transition: all 0.2s ease !important;
            border-radius: 12px !important;
        }
        #VerticalNavContent .oy8.zI7.iyn.Hsu {
            width: var(--theme-navIconSize) !important;
            height: var(--theme-navIconSize) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            background-size: var(--theme-navIconSize) var(--theme-navIconSize) !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }
        #VerticalNavContent svg.g_1.gUZ.U9O.kVc {
            width: var(--theme-navIconSize) !important;
            height: var(--theme-navIconSize) !important;
            fill: var(--theme-navIconFill) !important;
        }
        #VerticalNavContent a.nrl,
        #VerticalNavContent [role="button"] {
            width: var(--theme-navButtonSize) !important;
            height: var(--theme-navButtonSize) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
        }
        #VerticalNavContent .oy8 {
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: var(--theme-navIconSize) var(--theme-navIconSize) !important;
        }
        #VerticalNavContent [data-test-id="home-tab"] .oy8 {
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path d="M39.5 43h-9a2.5 2.5 0 0 1-2.5-2.5v-9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 6 40.5V21.413a7.5 7.5 0 0 1 2.859-5.893L23.071 4.321a1.5 1.5 0 0 1 1.857 0L39.142 15.52A7.5 7.5 0 0 1 42 21.411V40.5a2.5 2.5 0 0 1-2.5 2.5" fill="%23A8B3C7"/></svg>') !important;
        }
        #VerticalNavContent [data-test-id="create-tab"] .oy8 {
            background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V5C20.5 4.17157 19.8284 3.5 19 3.5ZM13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7V10.75H7C6.30964 10.75 5.75 11.3096 5.75 12C5.75 12.6904 6.30964 13.25 7 13.25H10.75V17C10.75 17.6904 11.3096 18.25 12 18.25C12.6904 18.25 13.25 17.6904 13.25 17V13.25H17C17.6904 13.25 18.25 12.6904 18.25 12C18.25 11.3096 17.6904 10.75 17 10.75H13.25V7Z" fill="%23A8B3C7"/></svg>') !important;
        }
        #VerticalNavContent [data-test-id="bell-icon"] .oy8 {
            background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 14.227V7C16.5 4.51471 14.4853 2.5 12 2.5C9.51471 2.5 7.5 4.51471 7.5 7V14.227L6.73561 14.9643C6.26116 15.422 5.84638 15.9379 5.5032 16.5H18.4968C18.1536 15.9379 17.7388 15.422 17.2644 14.9643L16.5 14.227Z" fill="%23A8B3C7"/></svg>') !important;
        }
        #VerticalNavContent [data-test-id="notifications-button"] .oy8 {
            background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6831 18.2737C3.07314 15.4778 2.25 13.3365 2.25 11C2.25 5.61536 6.61536 1.25 12 1.25C17.3846 1.25 21.75 5.61536 21.75 11C21.75 16.3846 17.3846 20.75 12 20.75C10.6917 20.75 9.44625 20.4881 8.30368 20.0202L3.67907 22.0065L4.6831 18.2737Z" fill="%23A8B3C7"/></svg>') !important;
        }
        #VerticalNavContent [data-test-id="vertical-nav-more-options-button"] .oy8 {
            background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.45081V16.5492L12 21.1206L20 16.5492V7.45081L12 2.87938L4 7.45081ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="%23A8B3C7"/></svg>') !important;
        }
        #VerticalNavContent .BG7:hover .DUt {
            transform: scale(1.05) !important;
            background-color: var(--theme-hover) !important;
        }
        #VerticalNavContent .BG7:hover svg.g_1.gUZ.U9O.kVc,
        #VerticalNavContent .BG7:hover .oy8 {
            fill: var(--theme-navIconHover) !important;
            filter: brightness(1.2) !important;
        }
        #VerticalNavContent .Tbt.active {
            position: relative !important;
        }
        #VerticalNavContent .Tbt.active .DUt {
            background-color: var(--theme-focus) !important;
        }
        #VerticalNavContent .Tbt.active::after {
            content: '' !important;
            position: absolute !important;
            left: 0 !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 4px !important;
            height: var(--theme-navIndicatorSize) !important;
            background-color: var(--theme-navActiveIndicator) !important;
            border-radius: 0 4px 4px 0 !important;
        }
        #VerticalNavContent .Jea.KS5.b8T.jzS.zI7.iyn.Hsu > div:last-child {
            margin-top: auto !important;
            padding-top: var(--theme-navSpacing) !important;
            border-top: 1px solid var(--theme-navBorder) !important;
        }
        #VerticalNavContent::-webkit-scrollbar {
            display: none !important;
        }
        #VerticalNavContent {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
        }

        /* GitHub Button Styles */
        .github-profile-button {
            position: fixed !important;
            right: 24px !important;
            bottom: 24px !important;
            z-index: 671 !important;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15)) !important;
        }

        .github-profile-button a {
            width: 48px !important;
            height: 48px !important;
            border-radius: 12px !important;
            background-color: var(--theme-focus) !important;
            border: 1px solid var(--theme-border) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .github-profile-button a:hover {
            transform: translateY(-2px) !important;
            background-color: var(--theme-navActiveIndicator) !important;
        }

        .github-profile-button a:hover::after {
            content: 'Star on GitHub' !important;
            position: absolute !important;
            top: -36px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background-color: var(--theme-focus) !important;
            color: var(--theme-text) !important;
            padding: 6px 12px !important;
            border-radius: 6px !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            white-space: nowrap !important;
            pointer-events: none !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
        }

        .github-profile-button svg {
            width: 22px !important;
            height: 22px !important;
            fill: var(--theme-text) !important;
        }

        /* Dropdown Menu Styles */
        #VerticalNav-MoreOptions-Flyout {
            background-color: var(--theme-secondary) !important;
            border: 1px solid var(--theme-border) !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
            width: 280px !important;
            max-width: 90vw !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
            scrollbar-width: none !important;  /* Firefox */
        }

        /* Hide scrollbar for Chrome/Safari */
        #VerticalNav-MoreOptions-Flyout::-webkit-scrollbar {
            display: none !important;
        }

        /* Base menu item styles */
        #VerticalNav-MoreOptions-Flyout .DUt.CCY {
            background-color: transparent !important;
            border-radius: 8px !important;
            margin: 0 8px !important;
            width: calc(100% - 16px) !important;
            min-height: 44px !important;
            transition: background-color 0.15s ease !important;
        }

        /* Hover effects */
        #VerticalNav-MoreOptions-Flyout .DUt.CCY:hover,
        #VerticalNav-MoreOptions-Flyout .DUt.CCY.BG7:hover,
        #VerticalNav-MoreOptions-Flyout .DUt.CCY.e8F:hover {
            background-color: var(--theme-hover) !important;
        }

        /* Remove inner background */
        #VerticalNav-MoreOptions-Flyout .DUt.Jea._co.haa,
        #VerticalNav-MoreOptions-Flyout .DUt.Jea._co.ebZ {
            background-color: transparent !important;
            width: 100% !important;
        }

        /* Link container */
        #VerticalNav-MoreOptions-Flyout .nrl._74 {
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            text-decoration: none !important;
        }

        /* Content container */
        #VerticalNav-MoreOptions-Flyout .hs0.un8.C9i.TB_ {
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 4px 8px !important;
        }

        /* Text container */
        #VerticalNav-MoreOptions-Flyout .KS5.hs0.un8.C9i.TB_ {
            flex: 1 1 auto !important;
            min-width: 0 !important;
        }

        /* Text styles with ellipsis */
        #VerticalNav-MoreOptions-Flyout .X8m.zDA.IZT {
            color: var(--theme-text) !important;
            font-size: 16px !important;
            line-height: 1.5 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            display: block !important;
        }

        /* Icon container */
        #VerticalNav-MoreOptions-Flyout .Jea.KS5.Yo2.ebZ.mQ8 {
            flex: 0 0 auto !important;
            margin-left: 8px !important;
        }

        /* Icons */
        #VerticalNav-MoreOptions-Flyout .gUZ {
            fill: var(--theme-muted) !important;
            transition: fill 0.15s ease !important;
        }

        #VerticalNav-MoreOptions-Flyout .DUt.CCY:hover .gUZ {
            fill: var(--theme-text) !important;
        }

        /* Divider */
        #VerticalNav-MoreOptions-Flyout .mPu {
            border-top: 1px solid var(--theme-border) !important;
            margin: 8px !important;
        }

        /* Custom button styles for SPw button */
        div.SPw._O1.KS5.mQ8.K1k.U7n {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform: translateZ(0);
            will-change: background-color, border-color, transform !important;
            transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease !important;
        }
        div.SPw._O1.KS5.mQ8.K1k.U7n:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.1) translateZ(0);
        }
        div.SPw._O1.KS5.mQ8.K1k.U7n:active,
        div.SPw._O1.KS5.mQ8.K1k.U7n:focus {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0);
        }
        div.SPw._O1.KS5.mQ8.K1k.U7n svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease;
        }
        div.SPw._O1.KS5.mQ8.K1k.U7n:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Target class combination for background color */
        .C00.CXk.Jea.KS5.V92.imm.jzS.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-obsidian) !important;
        }

        /* Target class combination for text color */
        .lH1.dyH.iFc.H2s.bwj.X8m.tg7.IZT {
            color: var(--theme-text) !important;
        }

        /* Closeup body image container background */
        [data-test-id="closeup-body-image-container"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Rounded corners for specific container */
        .Jea.imm.jzS.zI7.iyn.Hsu {
            border-radius: 20px !important;
        }

        /* Closeup visual container background */
        [data-test-id="closeup-visual-container"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Remove box shadow from closeup body style */
        [data-test-id="closeup-body-style"] {
            box-shadow: none !important;
        }

        /* Closeup image action button styles */
        div[aria-label="closeup image action button"].S9z.INd.CCY.Tbt.L4E.e8F.BG7 {
            background: none !important;
            border: none !important;
            padding: 0 !important;
        }

        div[data-test-id="shop-button"].Jea.KS5.Lfz.V92.XiG.imm.mQ8.pXK.zI7.iyn.Hsu {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 12px !important;
            transition: all 0.2s ease !important;
            min-height: 44px !important;
            min-width: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        div[data-test-id="shop-button"]:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) !important;
        }

        div[data-test-id="shop-button"] svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        div[data-test-id="shop-button"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Replace the SVG content */
        div[data-test-id="shop-button"] svg path {
            d: path("M19.64.62a5 5 0 0 0 3.74 3.74l.62.14v1l-.62.14a5 5 0 0 0-3.74 3.74l-.14.62h-1l-.14-.62a5 5 0 0 0-3.74-3.74L14 5.5v-1l.62-.14A5 5 0 0 0 18.36.62L18.5 0h1zM11 19a8 8 0 0 0 7.94-7h2.01c-.2 2.01-1 3.85-2.2 5.33l4.46 4.47-1.41 1.41-4.47-4.47a10 10 0 1 1-2.25-16.88l-3 1.21Q11.53 3 11 3a8 8 0 1 0 0 16") !important;
        }

        /* Text color for proper contrast */
        .lH1.dyH.iFc.H2s.bwj.X8m.zDA.IZT {
            color: var(--theme-text) !important;
        }

        /* Related products header background */
        [data-test-id="related-products-header"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Go back button styling */
        [data-test-id="go-back-button"] {
            position: relative !important;
            z-index: 2 !important;
        }

        [data-test-id="go-back-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
        }

        [data-test-id="go-back-button"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 12px !important;
            height: 40px !important;
            width: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="go-back-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="go-back-button"] svg {
            width: 18px !important;
            height: 18px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="go-back-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Inline comment composer container */
        [data-test-id="inline-comment-composer-container"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Comment input border color */
        .LJB.Pw5.XgI.fev.ujU.wsz.zI7.iyn.Hsu {
            border-color: var(--theme-border) !important;
        }

        /* DraftEditor container styling */
        .DraftEditor-editorContainer {
            outline: none !important;
            user-select: text !important;
            white-space: pre-wrap !important;
            overflow-wrap: break-word !important;
            color: var(--theme-text) !important;
        }

        .DraftEditor-editorContainer [data-contents="true"] {
            color: var(--theme-text) !important;
        }

        .DraftEditor-editorContainer .public-DraftEditorPlaceholder-root {
            color: var(--theme-muted) !important;
            transition: color 0.2s ease !important;
        }

        .DraftEditor-editorContainer:focus-within .public-DraftEditorPlaceholder-root {
            color: var(--theme-text) !important;
            opacity: 0.7 !important;
        }

        /* Comment action buttons styling */
        [data-test-id="emoji-selector"] button,
        button[aria-label="Select a sticker"],
        button[aria-label="Select a photo"] {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
        }

        /* Common container styles for all three buttons */
        [data-test-id="emoji-selector"] .SPw._O1.KS5.mQ8.K1k.uPZ,
        button[aria-label="Select a sticker"] .SPw._O1.KS5.mQ8.K1k.uPZ,
        button[aria-label="Select a photo"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 6px !important;
            height: 28px !important;
            width: 28px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            margin: 0 2px !important;
        }

        /* SVG icon styling */
        [data-test-id="emoji-selector"] svg,
        button[aria-label="Select a sticker"] svg,
        button[aria-label="Select a photo"] svg {
            width: 16px !important;
            height: 16px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        /* Container for all buttons */
        .KS5.hs0.mQ8.un8.aW4.yLs {
            display: flex !important;
            align-items: center !important;
            gap: 2px !important;
            padding: 2px !important;
        }

        /* Description content container background */
        [data-test-id="description-content-container"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Comments heading text color */
        #comments-heading,
        .JlN.zDA.IZT.tBJ.dyH.iFc.sAJ.swG {
            color: var(--theme-text) !important;
        }

        /* User follow button styling */
        [data-test-id="user-follow-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
        }

        [data-test-id="user-follow-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.ROv {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            padding: 8px 16px !important;
            min-height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="user-follow-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.ROv:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        [data-test-id="user-follow-button"] .X8m.tg7.IZT.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
        }

        /* Pressed state */
        [data-test-id="user-follow-button"] button[aria-pressed="true"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.ROv {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
        }

        /* User unfollow button styling */
        [data-test-id="user-unfollow-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
        }

        [data-test-id="user-unfollow-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ {
            background-color: var(--theme-focus) !important;
            border: var(--theme-borderWidth) solid var(--theme-border) !important;
            border-radius: 8px !important;
            padding: 8px 16px !important;
            min-height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="user-unfollow-button"] .akY.KI_.Hsu.USg.jKZ.CCY.LDc.xD4.i1W.V92.d24._O1.KS5.mQ8.Tbt.L4E.S9z.z_v.BG7.kJo.gSJ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        [data-test-id="user-unfollow-button"] .B1n.tg7.IZT.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
        }

        /* Creator Profile and Follower Count Styles */
        [data-test-id="follower-count"],
        [data-test-id="creator-profile-name"] {
            color: var(--theme-text) !important;
            -webkit-text-fill-color: var(--theme-text) !important;
        }

        /* Ensure any child elements also use the correct color */
        [data-test-id="follower-count"] *,
        [data-test-id="creator-profile-name"] * {
            color: var(--theme-text) !important;
            -webkit-text-fill-color: var(--theme-text) !important;
        }

        /* Hover state for interactive elements */
        [data-test-id="follower-count"]:hover,
        [data-test-id="creator-profile-name"]:hover {
            opacity: 0.9 !important;
        }

        /* Closeup Body Sticky Content */
        [data-test-id="closeup-body-sticky-content"] {
            background-color: var(--theme-obsidian) !important;
            border: none !important;
            box-shadow: none !important;
        }

        /* Ensure child elements maintain theme consistency */
        [data-test-id="closeup-body-sticky-content"] > div {
            background-color: var(--theme-obsidian) !important;
        }

        /* Add note button styling */
        .X0f.hs0.un8.C9i.TB_ button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        .X0f.hs0.un8.C9i.TB_ .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.a_A.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            padding: 8px 16px !important;
            min-height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        .X0f.hs0.un8.C9i.TB_ .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.a_A.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        .X0f.hs0.un8.C9i.TB_ .X8m.tg7.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
        }

        /* Focus state */
        .X0f.hs0.un8.C9i.TB_ button:focus-visible {
            outline: none !important;
        }

        .X0f.hs0.un8.C9i.TB_ button:focus-visible .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.a_A.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        .X0f.hs0.un8.C9i.TB_ button:active .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.a_A.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            transform: scale(0.98) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Favorite button styling */
        [data-test-id="closeup-favorite-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="closeup-favorite-button"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            height: 40px !important;
            width: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="closeup-favorite-button"] svg {
            width: 20px !important;
            height: 20px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="closeup-favorite-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="closeup-favorite-button"] .SPw._O1.KS5.mQ8.K1k.uPZ:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Focus state */
        [data-test-id="closeup-favorite-button"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="closeup-favorite-button"] button:focus-visible .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="closeup-favorite-button"] button:active .SPw._O1.KS5.mQ8.K1k.uPZ {
            transform: scale(0.95) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Favorited state */
        [data-test-id="closeup-favorite-button"] button[aria-pressed="true"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
        }

        [data-test-id="closeup-favorite-button"] button[aria-pressed="true"] svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* After the existing button styles, add this specific override */

        /* Send share button size adjustment */
        [data-test-id="send-share-link"] .SPw._O1.KS5.mQ8.K1k.U7n {
            height: 32px !important;
            width: 32px !important;
            min-height: 32px !important;
            min-width: 32px !important;
        }

        [data-test-id="send-share-link"] svg {
            width: 16px !important;
            height: 16px !important;
        }

        /* Adjust hover scale to be more subtle for smaller button */
        [data-test-id="send-share-link"] .SPw._O1.KS5.mQ8.K1k.U7n:hover {
            transform: scale(1.1) translateZ(0) !important;
        }

        /* Adjust active scale */
        [data-test-id="send-share-link"] .SPw._O1.KS5.mQ8.K1k.U7n:active {
            transform: scale(0.95) translateZ(0) !important;
        }

        /* After the send share button styles, add this specific override */

        /* Overflow menu button size adjustment */
        [data-test-id="overflow-menu-button"] .SPw._O1.KS5.mQ8.K1k.U7n {
            height: 32px !important;
            width: 32px !important;
            min-height: 32px !important;
            min-width: 32px !important;
        }

        [data-test-id="overflow-menu-button"] svg {
            width: 16px !important;
            height: 16px !important;
        }

        /* Adjust hover scale to be more subtle for smaller button */
        [data-test-id="overflow-menu-button"] .SPw._O1.KS5.mQ8.K1k.U7n:hover {
            transform: scale(1.1) translateZ(0) !important;
        }

        /* Adjust active scale */
        [data-test-id="overflow-menu-button"] .SPw._O1.KS5.mQ8.K1k.U7n:active {
            transform: scale(0.95) translateZ(0) !important;
        }

        /* Source link styling */
        [data-test-id="pinrep-source-link"] {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 16px !important;
            height: 32px !important;
            max-width: 120px !important;
            width: fit-content !important;
            transition: all 0.2s ease !important;
            overflow: hidden !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Link container */
        [data-test-id="pinrep-source-link"] a {
            text-decoration: none !important;
            color: var(--theme-text) !important;
            display: flex !important;
            align-items: center !important;
            padding: 0 8px !important;
            margin: 0 !important;
            height: 100% !important;
            width: 100% !important;
            overflow: hidden !important;
        }

        /* Main container */
        [data-test-id="pinrep-source-link"] .Jea.b8T.dLb {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            overflow: hidden !important;
            min-width: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Icon container */
        [data-test-id="pinrep-source-link"] .BTb.Eqh.Jea.mjS.v35 {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px 0 0 !important;
            padding: 0 !important;
        }

        /* Link icon */
        [data-test-id="pinrep-source-link"] svg {
            width: 8px !important;
            height: 8px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        /* Text container */
        [data-test-id="pinrep-source-link"] .Jea.KS5.L9n.Yo2.sLG {
            height: 18px !important;
            display: flex !important;
            align-items: center !important;
            min-width: 0 !important;
            flex: 1 !important;
            overflow: hidden !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Text styling */
        [data-test-id="pinrep-source-link"] .X8m.zDA.IZT {
            color: var(--theme-text) !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            width: 100% !important;
            min-width: 0 !important;
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            line-height: 18px !important;
        }

        /* Hover state */
        [data-test-id="pinrep-source-link"]:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: translateY(-1px) !important;
        }

        [data-test-id="pinrep-source-link"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Active state */
        [data-test-id="pinrep-source-link"]:active {
            transform: translateY(0) !important;
            background-color: var(--theme-focus) !important;
        }


        /* Quick Save Button */
        [data-test-id="quick-save-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="quick-save-button"] .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.Il7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        [data-test-id="quick-save-button"] .B1n.tg7.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
        }

        /* Hover state */
        [data-test-id="quick-save-button"] .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.Il7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.02) translateZ(0) !important;
        }

        /* Focus state */
        [data-test-id="quick-save-button"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="quick-save-button"] button:focus-visible .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.Il7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            background-color: var(--theme-focus) !important;
            border-color: var(--theme-border) !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active state */
        [data-test-id="quick-save-button"] button:active .RCK.Hsu.USg.adn.NTm.KhY.CCY.S9z.F10.xD4.i1W.V92.Il7.hNT.BG7.hDj._O1.KS5.mQ8.Tbt.L4E {
            transform: scale(0.98) translateZ(0) !important;
            background-color: var(--theme-focus) !important;
        }

        /* Header Accounts Options Button */
        [data-test-id="header-accounts-options-button"] button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            position: relative !important;
        }

        [data-test-id="header-accounts-options-button"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: transform 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            height: 24px !important;
            width: 24px !important;
        }

        [data-test-id="header-accounts-options-button"] svg {
            width: 12px !important;
            height: 12px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease, transform 0.2s ease !important;
        }

        /* Hover state */
        [data-test-id="header-accounts-options-button"] button:hover .SPw._O1.KS5.mQ8.K1k.uPZ {
            transform: translateY(2px) translateZ(0) !important;
        }

        [data-test-id="header-accounts-options-button"] button:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Focus state */
        [data-test-id="header-accounts-options-button"] button:focus-visible {
            outline: none !important;
        }

        [data-test-id="header-accounts-options-button"] button:focus-visible .SPw._O1.KS5.mQ8.K1k.uPZ {
            box-shadow: 0 0 0 2px var(--theme-border) !important;
            border-radius: 50% !important;
        }

        /* Active state */
        [data-test-id="header-accounts-options-button"] button:active .SPw._O1.KS5.mQ8.K1k.uPZ {
            transform: translateY(1px) translateZ(0) !important;
        }

        [data-test-id="header-accounts-options-button"] button:active svg {
            transform: scale(0.95) !important;
        }

        /* Closeup Title Card Styling */
        [data-test-id="closeup-title"] {
            background-color: var(--theme-obsidian) !important;
        }

        [data-test-id="closeup-title"] .CloseupTitleCard {
            color: var(--theme-text) !important;
            font-weight: 600 !important;
        }

        [data-test-id="closeup-title"] .richPinInformation {
            padding: 0 40px 16px !important;
            padding-top: 0 !important;
            width: 470px !important;
        }

        [data-test-id="closeup-title"] a {
            color: var(--theme-text) !important;
            text-decoration: none !important;
            transition: opacity 0.2s ease !important;
        }

        [data-test-id="closeup-title"] a:hover,
        [data-test-id="closeup-title"] a:active {
            color: var(--theme-text) !important;
            opacity: 0.9 !important;
        }

        [data-test-id="closeup-title"] h1 {
            color: var(--theme-text) !important;
            font-size: 24px !important;
            line-height: 1.4 !important;
            font-weight: 600 !important;
            margin: 0 !important;
            padding: 16px 0 !important;
        }

        /* Override any inline styles */
        [data-test-id="closeup-title"] [style*="color"],
        [data-test-id="closeup-title"] [class*="dyH"],
        [data-test-id="closeup-title"] [class*="iFc"],
        [data-test-id="closeup-title"] [class*="H2s"] {
            color: var(--theme-text) !important;
        }

        /* Truncated Description Text Color */
        [data-test-id="truncated-description"] {
            color: var(--theme-text) !important;
        }

        [data-test-id="truncated-description"] * {
            color: var(--theme-text) !important;
        }

        /* Invisible Scrollbar for Specific Container */
        .Jea.jzS.ujU.zI7.iyn.Hsu,
        .Jea.jzS.ujU.zI7.iyn.Hsu * {
            scrollbar-width: none !important;  /* Firefox */
            -ms-overflow-style: none !important;  /* IE and Edge */
        }

        .Jea.jzS.ujU.zI7.iyn.Hsu::-webkit-scrollbar,
        .Jea.jzS.ujU.zI7.iyn.Hsu *::-webkit-scrollbar {
            display: none !important;  /* Chrome, Safari and Opera */
        }

        /* Collapse Button Styling */
        [data-test-id="collapse-button"] {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: transform 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            width: 48px !important;
            cursor: pointer !important;
        }

        [data-test-id="collapse-button"] svg {
            width: 16px !important;
            height: 16px !important;
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease, transform 0.2s ease !important;
        }

        [data-test-id="collapse-button"]:hover {
            transform: translateY(2px) translateZ(0) !important;
        }

        [data-test-id="collapse-button"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        [data-test-id="collapse-button"]:active svg {
            transform: scale(0.95) !important;
        }

        /* Author and Comment Container Text Color */
        [data-test-id="author-and-comment-container"],
        [data-test-id="author-and-comment-container"] * {
            color: var(--theme-text) !important;
        }

        /* Comment Metadata Text Colors */
        [data-test-id="comments-time-passed"],
        [data-test-id="comment-reply-button-container"],
        [data-test-id="comment-reaction-container-reaction-count"],
        [data-test-id="comments-time-passed"] *,
        [data-test-id="comment-reply-button-container"] *,
        [data-test-id="comment-reaction-container-reaction-count"] * {
            color: var(--theme-muted) !important;
        }

        /* Comment Reaction Entry Point Icon Color */
        [data-test-id="comment-reaction-container-entry-point"] svg {
            fill: var(--theme-muted) !important;
        }


        /* Maybe Clickthrough Link Text Color */
        [data-test-id="maybe-clickthrough-link"],
        [data-test-id="maybe-clickthrough-link"] * {
            color: var(--theme-text) !important;
            -webkit-text-fill-color: var(--theme-text) !important;
            transition: opacity 0.2s ease !important;
        }

        [data-test-id="maybe-clickthrough-link"]:hover,
        [data-test-id="maybe-clickthrough-link"]:hover * {
            opacity: 0.9 !important;
        }

        [data-test-id="maybe-clickthrough-link"]:active,
        [data-test-id="maybe-clickthrough-link"]:active * {
            opacity: 0.8 !important;
        }

        /* Description Container Background Fix */
        [data-test-id="less-description-container"] {
            background: none !important;
        }

        [data-test-id="more-description-container"] {
            background-color: var(--theme-obsidian) !important;
        }

        [data-test-id="less-description-container"] [style*="background"] {
            background: none !important;
        }

        [data-test-id="more-description-container"] [style*="background"] {
            background-color: var(--theme-obsidian) !important;
        }

        /* Description Text States */
        [data-test-id="less-description-container"],
        [data-test-id="more-description-container"] {
            transition: box-shadow 0.2s ease !important;
        }

        [data-test-id="less-description-container"] span,
        [data-test-id="more-description-container"] span,
        [data-test-id="less-description-container"] div,
        [data-test-id="more-description-container"] div {
            color: var(--theme-text) !important;
            -webkit-text-fill-color: var(--theme-text) !important;
            transition: opacity 0.2s ease !important;
        }

        /* Interactive Text States */
        [data-test-id="less-description-container"]:hover span,
        [data-test-id="more-description-container"]:hover span,
        [data-test-id="less-description-container"]:hover div,
        [data-test-id="more-description-container"]:hover div {
            opacity: 0.9 !important;
        }

        [data-test-id="less-description-container"]:active span,
        [data-test-id="more-description-container"]:active span,
        [data-test-id="less-description-container"]:active div,
        [data-test-id="more-description-container"]:active div {
            opacity: 0.8 !important;
        }

        /* Focus State */
        [data-test-id="less-description-container"]:focus-visible,
        [data-test-id="more-description-container"]:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
            border-radius: 4px !important;
        }


        /* Pin Type Identifier Styling */
        [data-test-id="PinTypeIdentifier"] {
            background-color: var(--theme-secondary) !important;
            color: var(--theme-text) !important;
        }

        [data-test-id="PinTypeIdentifier"].FNs.zI7.iyn.Hsu {
            background-color: var(--theme-secondary) !important;
            color: var(--theme-text) !important;
        }

        /* Override any inline styles */
        [data-test-id="PinTypeIdentifier"][style*="background-color"],
        [data-test-id="PinTypeIdentifier"][style*="color"] {
            background-color: var(--theme-secondary) !important;
            color: var(--theme-text) !important;
        }


        /* Text Color Overrides */
        .C00._co.zI7.iyn.Hsu,
        .C00._co.zI7.iyn.Hsu *,
        .lH1.dyH.iFc.H2s.sAJ.X8m.tg7.IZT {
            color: var(--theme-text) !important;
            transition: opacity 0.2s ease !important;
        }

        .C00._co.zI7.iyn.Hsu:hover,
        .C00._co.zI7.iyn.Hsu:hover * {
            opacity: 0.9 !important;
        }

        .C00._co.zI7.iyn.Hsu:active,
        .C00._co.zI7.iyn.Hsu:active * {
            opacity: 0.8 !important;
        }

        /* Override any inline styles */
        .C00._co.zI7.iyn.Hsu[style*="color"],
        .C00._co.zI7.iyn.Hsu *[style*="color"],
        .lH1.dyH.iFc.H2s.sAJ.X8m.tg7.IZT[style*="color"] {
            color: var(--theme-text) !important;
        }

        /* Invite Friends CTA Styling */
        [data-test-id="invite-friends-cta"] {
            background-color: var(--theme-secondary) !important;
            transition: background-color 0.2s ease !important;
        }

        /* Text styling for all inner text elements */
        [data-test-id="invite-friends-cta"] .X8m.zDA.IZT,
        [data-test-id="invite-friends-cta"] .JlN.zDA.IZT {
            color: var(--theme-text) !important;
            transition: opacity 0.2s ease !important;
        }

        /* Icon container styling */
        [data-test-id="invite-friends-cta"] .H-G.INd.Jea.KS5.Yo2.haa.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-focus) !important;
            border-radius: 12px !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
        }

        /* Hover states */
        [data-test-id="invite-friends-cta"]:hover .H-G.INd.Jea.KS5.Yo2.haa.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-hover) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        /* Active states */
        [data-test-id="invite-friends-cta"]:active .H-G.INd.Jea.KS5.Yo2.haa.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-focus) !important;
            transform: scale(0.95) translateZ(0) !important;
        }

        /* Icon styling */
        [data-test-id="invite-friends-cta"] svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        /* Hover states */
        [data-test-id="invite-friends-cta"]:hover {
            background-color: var(--theme-hover) !important;
        }

        [data-test-id="invite-friends-cta"]:hover .H-G.INd.Jea.KS5.Yo2.haa.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-hover) !important;
        }

        [data-test-id="invite-friends-cta"]:hover .X8m.zDA.IZT,
        [data-test-id="invite-friends-cta"]:hover .JlN.zDA.IZT {
            opacity: 0.9 !important;
        }

        [data-test-id="invite-friends-cta"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Active states */
        [data-test-id="invite-friends-cta"]:active {
            background-color: var(--theme-focus) !important;
        }

        [data-test-id="invite-friends-cta"]:active .H-G.INd.Jea.KS5.Yo2.haa.mQ8.zI7.iyn.Hsu {
            background-color: var(--theme-focus) !important;
        }

        [data-test-id="invite-friends-cta"]:active .X8m.zDA.IZT,
        [data-test-id="invite-friends-cta"]:active .JlN.zDA.IZT {
            opacity: 0.8 !important;
        }

        /* Saved Board Title Text Color */
        [data-test-id="saved-board-title"],
        [data-test-id="saved-board-title"] .X8m.PON.IZT.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
        }

        /* Override any inline styles */
        [data-test-id="saved-board-title"][style*="color"],
        [data-test-id="saved-board-title"] [style*="color"] {
            color: var(--theme-text) !important;
        }

        /* Chat Window Container Styling */
        [data-test-id="chat-window-container"] {
            background-color: var(--theme-secondary) !important;
            box-shadow: none !important;
        }

        /* Header Section */
        [data-test-id="chat-window-container"] .Jea.KS5._co.hjq {
            background-color: var(--theme-secondary) !important; /* Match container background */
            border-bottom: 1px solid var(--theme-border) !important;
        }

        /* Messages Title */
        [data-test-id="chat-window-container"] .X8m.zDA.IZT.tBJ.dyH.iFc.bwj.H2s {
            color: var(--theme-text) !important;
            font-weight: 600 !important;
        }

        /* Close Button */
        [data-test-id="chat-window-container"] button[aria-label="Close"] {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            height: 32px !important;
            width: 32px !important;
            margin-right: 8px !important; /* Add space between text and button */
        }

        [data-test-id="chat-window-container"] button[aria-label="Close"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-obsidian) !important; /* Use darker color for buttons */
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            height: 32px !important; /* Override container size */
            width: 32px !important; /* Override container size */
        }

        [data-test-id="chat-window-container"] button[aria-label="Close"] svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
            width: 16px !important; /* Smaller icon size */
            height: 16px !important; /* Smaller icon size */
        }

        [data-test-id="chat-window-container"] button[aria-label="Close"]:hover .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="chat-window-container"] button[aria-label="Close"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Options Button */
        [data-test-id="chat-window-container"] button[aria-label="inbox options overflow button"] {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            cursor: pointer !important;
            height: 32px !important;
            width: 32px !important;
            margin-right: 16px !important; /* Add space from right border */
        }

        [data-test-id="chat-window-container"] button[aria-label="inbox options overflow button"] .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-obsidian) !important; /* Use darker color for buttons */
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 50% !important;
            transition: all 0.2s ease !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            height: 32px !important; /* Override container size */
            width: 32px !important; /* Override container size */
        }

        [data-test-id="chat-window-container"] button[aria-label="inbox options overflow button"] svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
            width: 16px !important; /* Smaller icon size */
            height: 16px !important; /* Smaller icon size */
        }

        [data-test-id="chat-window-container"] button[aria-label="inbox options overflow button"]:hover .SPw._O1.KS5.mQ8.K1k.uPZ {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: scale(1.05) translateZ(0) !important;
        }

        [data-test-id="chat-window-container"] button[aria-label="inbox options overflow button"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Compose New Message Button */
        [data-test-id="compose-new-message-button"] .S9z.eEj.CCY.Tbt.L4E.e8F.BG7 {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            transition: all 0.2s ease !important;
            margin: 8px !important;
        }

        [data-test-id="compose-new-message-button"] .H-G.INd.Jea.KS5.mQ8.yBD svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="compose-new-message-button"] .X8m.zDA.IZT.CKL.tBJ.dyH.iFc.sAJ.H2s {
            color: var(--theme-text) !important;
        }

        [data-test-id="compose-new-message-button"] .S9z.eEj.CCY.Tbt.L4E.e8F.BG7:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: translateY(-1px) !important;
        }

        [data-test-id="compose-new-message-button"] .S9z.eEj.CCY.Tbt.L4E.e8F.BG7:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Invite Friends Section */
        [data-test-id="invite-friends-cta"] {
            background-color: var(--theme-secondary) !important;
            border: var(--theme-borderWidth) solid transparent !important;
            border-radius: 8px !important;
            margin: 8px !important;
            transition: all 0.2s ease !important;
        }

        [data-test-id="invite-friends-cta"] .H-G.INd.Jea.KS5.Yo2.haa.mQ8 {
            background-color: var(--theme-focus) !important;
            border-radius: 12px !important;
            transition: all 0.2s ease !important;
        }

        [data-test-id="invite-friends-cta"] svg {
            fill: var(--theme-navIconFill) !important;
            transition: fill 0.2s ease !important;
        }

        [data-test-id="invite-friends-cta"] .X8m.zDA.IZT,
        [data-test-id="invite-friends-cta"] .JlN.zDA.IZT {
            color: var(--theme-text) !important;
        }

        [data-test-id="invite-friends-cta"]:hover {
            background-color: var(--theme-hover) !important;
            border-color: var(--theme-border) !important;
            transform: translateY(-1px) !important;
        }

        [data-test-id="invite-friends-cta"]:hover .H-G.INd.Jea.KS5.Yo2.haa.mQ8 {
            background-color: var(--theme-hover) !important;
        }

        [data-test-id="invite-friends-cta"]:hover svg {
            fill: var(--theme-navIconHover) !important;
        }

        /* Focus States */
        [data-test-id="chat-window-container"] button:focus-visible,
        [data-test-id="compose-new-message-button"] .S9z.eEj.CCY.Tbt.L4E.e8F.BG7:focus-visible,
        [data-test-id="invite-friends-cta"]:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 2px var(--theme-border) !important;
        }

        /* Active States */
        [data-test-id="chat-window-container"] button:active .SPw._O1.KS5.mQ8.K1k.uPZ,
        [data-test-id="compose-new-message-button"] .S9z.eEj.CCY.Tbt.L4E.e8F.BG7:active,
        [data-test-id="invite-friends-cta"]:active {
            transform: scale(0.98) !important;
            background-color: var(--theme-focus) !important;
        }
    `;

    // ====================================
    // 3. CSS Injection Functions
    // ====================================

    // Helper to create a <style> element with given CSS and optional id/marker
    const createStyleElement = (cssText, id) => {
        const styleEl = document.createElement("style");
        styleEl.textContent = cssText;
        if (id) {
            styleEl.id = id;
            styleEl.setAttribute("data-injected-by", "pinterest-theme");
        }
        return styleEl;
    };

    // Inject both the preload (base) and main CSS into the document
    let stylesInjected = false;
    const injectStyles = () => {
        if (stylesInjected) return;
        const preloadStyle = createStyleElement(preloadCSS, "pinterest-theme-preload");
        const mainStyle = createStyleElement(mainCSS, "pinterest-theme-main");

        // Append both styles in a document fragment for efficiency
        const frag = document.createDocumentFragment();
        frag.appendChild(preloadStyle);
        frag.appendChild(mainStyle);
        document.documentElement.appendChild(frag);

        // Also call GM_addStyle for the main CSS (as in original)
        GM_addStyle(mainCSS);

        stylesInjected = true;
    };

    // ====================================
    // 4. Theme Activation & Mutation Observer
    // ====================================

    // Add the "themed" class to <html> (if not already present) to reveal the page
    const applyThemeClass = () => {
        if (!document.documentElement.classList.contains("themed")) {
            requestAnimationFrame(() => {
                document.documentElement.classList.add("themed");
            });
        }
    };

    // Function to add the GitHub button
    const addGithubButton = () => {
        const footerButton = document.querySelector('[data-test-id="footer-more-button-container"]')?.closest(".J8R");
        if (footerButton) {
            const githubButton = document.createElement("div");
            githubButton.className = "github-profile-button";
            githubButton.innerHTML = `
                <a href="https://github.com/mustafachyi/Pinterest-Themer" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                </a>
            `;
            footerButton.parentNode.replaceChild(githubButton, footerButton);
        }
    };

    // Initialize theme injection and activation when DOM is ready
    const initTheme = () => {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                injectStyles();
                applyThemeClass();
                addGithubButton();
                updateDimOverlay(); // <-- add call here
            }, { once: true });
        } else {
            injectStyles();
            applyThemeClass();
            addGithubButton();
            updateDimOverlay(); // <-- add call here
        }

        // Observe mutations to reapply theme adjustments if needed
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    addGithubButton();
                    updateDimOverlay();  // <-- update overlay on DOM changes
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    // Add this new function below addGithubButton
    const updateDimOverlay = () => {
        const chatWindow = document.querySelector('[data-test-id="chat-window-container"]');
        let overlay = document.getElementById("pinterest-dim-overlay");
        if (chatWindow) {
            // Check if the chat container is effectively hidden
            const cs = window.getComputedStyle(chatWindow);
            if (cs.display === "none" || cs.visibility === "hidden") {
                if (overlay) overlay.remove();
                return;
            }
            if (!overlay) {
                overlay = document.createElement("div");
                overlay.id = "pinterest-dim-overlay";
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100vw";
                overlay.style.height = "100vh";
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // increased dimming
                overlay.style.willChange = "opacity"; // hint for hardware acceleration
                overlay.style.transform = "translate3d(0, 0, 0)"; // trigger GPU layer
                overlay.style.zIndex = "690"; // ensure it's below the chat window container (typically z-index 700)
                overlay.style.pointerEvents = "auto"; // enable clicks on the overlay to trigger chat close
                document.body.appendChild(overlay);
                // Add event listener to close the chat container when the overlay is clicked
                overlay.addEventListener("click", function(e) {
                    e.stopPropagation();
                    // Immediately remove the overlay for instant visual feedback
                    overlay.remove();
                    // Use requestAnimationFrame to schedule a direct closure action for smoother performance
                    requestAnimationFrame(() => {
                        // Directly hide the chat container without triggering slow animations
                        chatWindow.style.transition = "none";
                        chatWindow.style.display = "none";
                    });
                });
            }
            // Attach a mutation observer to track style/class changes on the chat container
            if (!chatWindow._dimObserver) {
                const chatObserver = new MutationObserver(() => {
                    const computed = window.getComputedStyle(chatWindow);
                    if (computed.display === "none" || computed.visibility === "hidden") {
                        if (overlay) overlay.remove();
                        chatObserver.disconnect();
                        chatWindow._dimObserver = null;
                    }
                });
                chatObserver.observe(chatWindow, { attributes: true, attributeFilter: ["style", "class"] });
                chatWindow._dimObserver = chatObserver;
            }
            // Attach an event listener to the chat container's close button for immediate overlay removal
            const closeButton = chatWindow.querySelector('button[aria-label="Close"]');
            if (closeButton && !closeButton._dimOverlayListenerAttached) {
                closeButton.addEventListener("click", () => {
                    if (overlay) {
                        overlay.remove();
                    }
                });
                closeButton._dimOverlayListenerAttached = true;
            }
        } else {
            if (overlay) {
                overlay.remove();
            }
        }
    };

    // Start the theme
    initTheme();
})();