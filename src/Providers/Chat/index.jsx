import { useState } from "react";
import { createContext } from "react";
import apiTcc from "../../APIs/TCC-STA";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [usuarioInfo, setUsuarioInfo] = useState([]);
    const [chatInfo, setChatInfo] = useState([]);

    const funcInfoUser = (idChat, type) => {
        if (type == "cliente") {
            apiTcc
                .get(`/clientes/${idChat}`)
                .then((resp) => {
                    setUsuarioInfo(resp.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (type == "tecnico") {
            apiTcc
                .get(`/tecnicos/${idChat}`)
                .then((resp) => {
                    setUsuarioInfo(resp.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const funcChatEnviar = (datas, type) => {
        if (type == "cliente") {
            datas.usuario = usuarioInfo.id;
            datas.name = usuarioInfo.name;
            apiTcc
                .post(`/chat/`, datas)
                .then((resp) => {
                    return resp.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        if (type == "tecnico") {
            datas.usuario = usuarioInfo.cliente.id;
            datas.name = usuarioInfo.cliente.name;
            apiTcc
                .post(`/chat`, datas)
                .then((resp) => {
                    return resp.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        /* 
        console.log(data); */
    };

    const funcListChat = (idList) => {
        if (idList) {
            apiTcc
                .get(`/solicitacao-servico/${idList}`)
                .then((resp) => {
                    setChatInfo(resp.data.chats);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <ChatContext.Provider
            value={{
                chatInfo,
                usuarioInfo,
                funcListChat,
                funcInfoUser,
                funcChatEnviar,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
