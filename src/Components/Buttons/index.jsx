import {
    BtnCancelarServico,
    BtnClose,
    BtnCriarService,
    BtnDrop,
    BtnEdit,
    BtnFilterServico,
    BtnH,
    BtnHamburg,
    BtnMenu,
    BtnMenuL,
    BtnSolicitar,
    BtnSolicitarServico,
    BtnVoltar,
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
    edit,
    dropMenu,
    voltar,
    filterServico,
    solicitar,
    solicitarServico,
    voltarServico,
    addCriarService,
    criarServico,
    cancelar,
    excluir,
    editarServico,
    solicitarTec,
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

            {edit && (
                <>
                    <BtnEdit onClick={click}>{children}</BtnEdit>
                </>
            )}

            {voltar && (
                <>
                    <BtnVoltar>
                        <button onClick={click}>{children}</button>
                    </BtnVoltar>
                </>
            )}

            {filterServico && (
                <BtnFilterServico>
                    <button onClick={click}>{children}</button>
                </BtnFilterServico>
            )}
            {solicitar && (
                <BtnSolicitar>
                    <button onClick={click}>{children}</button>
                </BtnSolicitar>
            )}

            {solicitarServico && (
                <BtnSolicitarServico onClick={click}>
                    {children}
                </BtnSolicitarServico>
            )}

            {voltarServico && (
                <BtnCancelarServico onClick={click}>
                    {children}
                </BtnCancelarServico>
            )}

            {addCriarService && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}

            {criarServico && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}

            {excluir && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}

            {cancelar && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}

            {editarServico && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}

            {solicitarTec && (
                <BtnCriarService onClick={click}>{children}</BtnCriarService>
            )}
        </>
    );
};
