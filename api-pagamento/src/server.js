import "dotenv/config"; // Importando dotenv para carregar variáveis de ambiente
import cors from "cors";
import axios from "axios";
import fs, { access } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import express from "express";

// Substituindo __dirname e __filename para trabalhar com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lendo o certificado de forma sincrona
const cert = fs.readFileSync(
  path.resolve(__dirname, `../certs/${process.env.GN_CERT}`)
);

// criando um objeto agent para passar o certificado
const agent = new https.Agent({
  pfx: cert,
  passphrase: "",
});

// pegando as credenciais e passando para base64
const credentials = Buffer.from(
  `${process.env.GN_CLIENT_ID}:${process.env.GN_CLIENT_SECRET}`
).toString("base64");

const app = express();
app.use(cors());

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");


// ESSE CODIGO AI É DE QUANDO AINDA NÃO ESTAVA CONECTANDO COM O FRONTEND


// app.get('/', async (req, res) => {

//   // fazendo a requisição para o endpoint de token
// const authResponse = await axios({
//   method: 'post',
//   url: `${process.env.GN_ENDPOINT}/oauth/token`,
//   headers: {
//     Authorization: `Basic ${credentials}`,
//     "Content-Type": "application/json"
//   },
//   httpsAgent: agent,
//   data: {
//     grant_type: 'client_credentials'
//   }
// });

//   const token = authResponse.data.access_token;

//   // da pra criar um objeto com o axios para padronizar as requisições que recebem a mesmas informações como argumento
//   const reqGN = axios.create({
//     baseURL: process.env.GN_ENDPOINT,
//     httpsAgent: agent,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json"
//     }
//   });

//   const dataCob = {
//       calendario: {
//         expiracao: 3600
//       },
//       devedor: {
//         cpf: '12345678909',
//         nome: 'Francisco da Silva'
//       },
//       valor: {
//         original: '124.45'
//       },
//       chave: '534.058.728-20',
//       solicitacaoPagador: 'Informe o número ou identificador do pedido.'
//   }

//   // const config = {
//   //   httpsAgent: agent,
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-Type": "application/json"
//   //   }
//   // }

//   const cobResponse = await reqGN.post('/v2/cob', dataCob);

//   const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`);

//   // res.send(qrcodeResponse.data);
//   res.render('qrcode', { qrcodeImage: qrcodeResponse.data.imagemQrcode });
// });

// console.log(cert);
// console.log(process.env.GN_CLIENTE_ID);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// AQUI É COM O FRONT CONECTADO: Pagamento.jsx

app.post("/api/generate-qrcode", async (req, res) => {
  try {
    const authResponse = await axios({
      method: "post",
      url: `${process.env.GN_ENDPOINT}/oauth/token`,
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: {
        grant_type: "client_credentials",
      },
    });

    const token = authResponse.data.access_token;

    const reqGN = axios.create({
      baseURL: process.env.GN_ENDPOINT,
      httpsAgent: agent,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // objeto para criar a cobrança
    const dataCob = {
      calendario: { expiracao: 3600 },
      devedor: { cpf: "12345678909", nome: "Francisco da Silva" },
      valor: { original: "124.45" },
      chave: "469.921.668-40",
      solicitacaoPagador: "Informe o número ou identificador do pedido.",
    };

    // requisição post q cria a cobrança
    const cobResponse = await reqGN.post("/v2/cob", dataCob);

    // requisição get q pega o qrcode
    const qrcodeResponse = await reqGN.get(
      `/v2/loc/${cobResponse.data.loc.id}/qrcode`
    );

    res.json({ qrcodeImage: qrcodeResponse.data.imagemQrcode });
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar QR code" });
  }
});
