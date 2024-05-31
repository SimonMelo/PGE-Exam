import api from "../config/api"

const AuthService = {
    register: async (data) => {
      try {
        const response = await api.post('/auth/register', data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao registrar usuário');
      }
    },
    
    login: async (data) => {
      try {
        const response = await api.post('/auth/login', data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao fazer login');
      }
    }
  };
  
  const ClientService = {
    getAllClients: async () => {
      try {
        const response = await api.get('/clientes');
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter clientes');
      }
    },
    
    getClientById: async (clientId) => {
      try {
        const response = await api.get(`/clientes/${clientId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter cliente');
      }
    },
    
    updateClient: async (clientId, data) => {
      try {
        const response = await api.put(`/clientes/${clientId}`, data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao atualizar cliente');
      }
    },
    
    deleteClient: async (clientId) => {
      try {
        const response = await api.delete(`/clientes/${clientId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao excluir cliente');
      }
    }
  };
  
  const LawyerService = {
    getAllLawyers: async () => {
      try {
        const response = await api.get('/advogados');
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter advogados');
      }
    },
    
    getLawyerById: async (lawyerId) => {
      try {
        const response = await api.get(`/advogados/${lawyerId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter advogado');
      }
    },
    
    updateLawyer: async (lawyerId, data) => {
      try {
        const response = await api.put(`/advogados/${lawyerId}`, data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao atualizar advogado');
      }
    },
    
    deleteLawyer: async (lawyerId) => {
      try {
        const response = await api.delete(`/advogados/${lawyerId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao excluir advogado');
      }
    }
  };
  
  const JudicialProcessService = {
    getAllProcesses: async () => {
      try {
        const response = await api.get('/processos');
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter processos');
      }
    },
    
    getProcessById: async (processId) => {
      try {
        const response = await api.get(`/processos/${processId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter processo');
      }
    },
    
    createProcess: async (data) => {
      try {
        const response = await api.post('/processos', data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao criar processo');
      }
    },
    
    updateProcess: async (processId, data) => {
      try {
        const response = await api.put(`/processos/${processId}`, data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao atualizar processo');
      }
    },
    
    deleteProcess: async (processId) => {
      try {
        const response = await api.delete(`/processos/${processId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao excluir processo');
      }
    }
  };
  
  const DocumentService = {
    getDocumentById: async (documentId) => {
      try {
        const response = await api.get(`/documentos/${documentId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao obter documento');
      }
    },
    
    attachDocumentToProcess: async (processId, data) => {
      try {
        const response = await api.post(`/documentos/${processId}`, data);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao anexar documento ao processo');
      }
    },
    
    detachDocumentFromProcess: async (documentId) => {
      try {
        const response = await api.delete(`/documentos/${documentId}`);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || 'Erro ao desanexar documento do processo');
      }
    }
  };
  
  export { AuthService, ClientService, LawyerService, JudicialProcessService, DocumentService };