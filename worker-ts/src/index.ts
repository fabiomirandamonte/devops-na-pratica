import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:8080/tarefas';

async function verificarTarefas() {
    try {
        const resposta = await axios.get(API_URL);
        console.log(`[Worker] Verificação efetuada com sucesso! Total de tarefas no sistema: ${resposta.data.length}`);
    } catch (error: any) {
         console.error('[Worker] Erro ao conectar na API Spring Boot:', error.message);
    }
}

setInterval(verificarTarefas, 10000);
console.log('Worker TypeScript iniciado e aguardando...'); 