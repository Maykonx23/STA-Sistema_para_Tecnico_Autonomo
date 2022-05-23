import {
    BtnClose,
    BtnDrop,
    BtnH,
    BtnHamburg,
    BtnMenu,
    BtnMenuL,
} from "./styled";
import MenuH from "./menu_H.svg";
import MenuClose from "./menu_Close.svg";

export const Button = ({
    children,
    classe,
    type,
    click,
    menu,
    login,
    menuHamburger,
    close,
    menuH,
    drop,
    dropMenu,
}) => {
    return (
        <>
            {menu && (
                <>
                    {click ? (
                        <BtnMenu onClick={click} type={type} className={classe}>
                            {children}
                        </BtnMenu>
                    ) : (
                        <BtnMenu type={type} className={classe}>
                            {children}
                        </BtnMenu>
                    )}
                </>
            )}

            {login && (
                <>
                    {click ? (
                        <BtnMenuL
                            onClick={click}
                            type={type}
                            className={classe}
                        >
                            {children}
                        </BtnMenuL>
                    ) : (
                        <BtnMenuL type={type} className={classe}>
                            {children}
                        </BtnMenuL>
                    )}
                </>
            )}

            {menuHamburger && (
                <BtnHamburg onClick={click}>
                    <img src={MenuH} alt="Menu" />
                </BtnHamburg>
            )}
            {close && (
                <BtnClose onClick={click}>
                    <img src={MenuClose} alt="Fechar" />
                </BtnClose>
            )}

            {menuH && (
                <>
                    <BtnH>
                        <button onClick={click}>{children}</button>
                    </BtnH>
                </>
            )}

            {dropMenu && (
                <>
                    <BtnDrop onClick={click}>{children}</BtnDrop>
                </>
            )}
        </>
    );
};
