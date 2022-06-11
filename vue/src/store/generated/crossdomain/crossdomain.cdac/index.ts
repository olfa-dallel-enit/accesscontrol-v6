import { txClient, queryClient, MissingWalletError , registry} from './module'

import { AuthenticationLog } from "./module/types/cdac/authentication_log"
import { Certificate } from "./module/types/cdac/certificate"
import { CooperationData } from "./module/types/cdac/cooperation_data"
import { CooperationLog } from "./module/types/cdac/cooperation_log"
import { CooperationNetwork } from "./module/types/cdac/cooperation_network"
import { CooperationNetworkFeatures } from "./module/types/cdac/cooperation_network_features"
import { Domain } from "./module/types/cdac/domain"
import { DomainCooperation } from "./module/types/cdac/domain_cooperation"
import { DomainMap } from "./module/types/cdac/domain_map"
import { ForwardPolicy } from "./module/types/cdac/forward_policy"
import { IbcConnection } from "./module/types/cdac/ibc_connection"
import { CdacPacketData } from "./module/types/cdac/packet"
import { NoData } from "./module/types/cdac/packet"
import { AuthenticateDomainPacketData } from "./module/types/cdac/packet"
import { AuthenticateDomainPacketAck } from "./module/types/cdac/packet"
import { EstablishCooperationPacketData } from "./module/types/cdac/packet"
import { EstablishCooperationPacketAck } from "./module/types/cdac/packet"
import { ForwardCooperationDataPacketData } from "./module/types/cdac/packet"
import { ForwardCooperationDataPacketAck } from "./module/types/cdac/packet"
import { ExchangeCooperationDataPacketData } from "./module/types/cdac/packet"
import { ExchangeCooperationDataPacketAck } from "./module/types/cdac/packet"
import { ModifyCooperationCostPacketData } from "./module/types/cdac/packet"
import { ModifyCooperationCostPacketAck } from "./module/types/cdac/packet"
import { DisableCooperationPacketData } from "./module/types/cdac/packet"
import { DisableCooperationPacketAck } from "./module/types/cdac/packet"
import { EnableCooperationPacketData } from "./module/types/cdac/packet"
import { EnableCooperationPacketAck } from "./module/types/cdac/packet"
import { ModifyCooperationValidityPacketData } from "./module/types/cdac/packet"
import { ModifyCooperationValidityPacketAck } from "./module/types/cdac/packet"
import { ModifyCooperationInterestPacketData } from "./module/types/cdac/packet"
import { ModifyCooperationInterestPacketAck } from "./module/types/cdac/packet"
import { RevokeCooperationPacketData } from "./module/types/cdac/packet"
import { RevokeCooperationPacketAck } from "./module/types/cdac/packet"
import { Params } from "./module/types/cdac/params"
import { PublicKey } from "./module/types/cdac/public_key"
import { UpdatePolicy } from "./module/types/cdac/update_policy"
import { Validity } from "./module/types/cdac/validity"


export { AuthenticationLog, Certificate, CooperationData, CooperationLog, CooperationNetwork, CooperationNetworkFeatures, Domain, DomainCooperation, DomainMap, ForwardPolicy, IbcConnection, CdacPacketData, NoData, AuthenticateDomainPacketData, AuthenticateDomainPacketAck, EstablishCooperationPacketData, EstablishCooperationPacketAck, ForwardCooperationDataPacketData, ForwardCooperationDataPacketAck, ExchangeCooperationDataPacketData, ExchangeCooperationDataPacketAck, ModifyCooperationCostPacketData, ModifyCooperationCostPacketAck, DisableCooperationPacketData, DisableCooperationPacketAck, EnableCooperationPacketData, EnableCooperationPacketAck, ModifyCooperationValidityPacketData, ModifyCooperationValidityPacketAck, ModifyCooperationInterestPacketData, ModifyCooperationInterestPacketAck, RevokeCooperationPacketData, RevokeCooperationPacketAck, Params, PublicKey, UpdatePolicy, Validity };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				PublicKey: {},
				PublicKeyAll: {},
				Validity: {},
				ValidityAll: {},
				Certificate: {},
				CertificateAll: {},
				IbcConnection: {},
				IbcConnectionAll: {},
				Domain: {},
				DomainAll: {},
				AuthenticationLog: {},
				AuthenticationLogAll: {},
				DomainCooperation: {},
				DomainCooperationAll: {},
				CooperationLog: {},
				CooperationLogAll: {},
				CheckEstablishedCooperationByChannel: {},
				EstablishedCooperationByChannel: {},
				ForwardPolicy: {},
				ForwardPolicyAll: {},
				RetrieveForwardPolicy: {},
				DomainMap: {},
				DomainMapAll: {},
				CooperationNetworkFeatures: {},
				CooperationNetworkFeaturesAll: {},
				CooperationData: {},
				CooperationDataAll: {},
				CooperationNetwork: {},
				CooperationNetworkAll: {},
				UpdatePolicy: {},
				
				_Structure: {
						AuthenticationLog: getStructure(AuthenticationLog.fromPartial({})),
						Certificate: getStructure(Certificate.fromPartial({})),
						CooperationData: getStructure(CooperationData.fromPartial({})),
						CooperationLog: getStructure(CooperationLog.fromPartial({})),
						CooperationNetwork: getStructure(CooperationNetwork.fromPartial({})),
						CooperationNetworkFeatures: getStructure(CooperationNetworkFeatures.fromPartial({})),
						Domain: getStructure(Domain.fromPartial({})),
						DomainCooperation: getStructure(DomainCooperation.fromPartial({})),
						DomainMap: getStructure(DomainMap.fromPartial({})),
						ForwardPolicy: getStructure(ForwardPolicy.fromPartial({})),
						IbcConnection: getStructure(IbcConnection.fromPartial({})),
						CdacPacketData: getStructure(CdacPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						AuthenticateDomainPacketData: getStructure(AuthenticateDomainPacketData.fromPartial({})),
						AuthenticateDomainPacketAck: getStructure(AuthenticateDomainPacketAck.fromPartial({})),
						EstablishCooperationPacketData: getStructure(EstablishCooperationPacketData.fromPartial({})),
						EstablishCooperationPacketAck: getStructure(EstablishCooperationPacketAck.fromPartial({})),
						ForwardCooperationDataPacketData: getStructure(ForwardCooperationDataPacketData.fromPartial({})),
						ForwardCooperationDataPacketAck: getStructure(ForwardCooperationDataPacketAck.fromPartial({})),
						ExchangeCooperationDataPacketData: getStructure(ExchangeCooperationDataPacketData.fromPartial({})),
						ExchangeCooperationDataPacketAck: getStructure(ExchangeCooperationDataPacketAck.fromPartial({})),
						ModifyCooperationCostPacketData: getStructure(ModifyCooperationCostPacketData.fromPartial({})),
						ModifyCooperationCostPacketAck: getStructure(ModifyCooperationCostPacketAck.fromPartial({})),
						DisableCooperationPacketData: getStructure(DisableCooperationPacketData.fromPartial({})),
						DisableCooperationPacketAck: getStructure(DisableCooperationPacketAck.fromPartial({})),
						EnableCooperationPacketData: getStructure(EnableCooperationPacketData.fromPartial({})),
						EnableCooperationPacketAck: getStructure(EnableCooperationPacketAck.fromPartial({})),
						ModifyCooperationValidityPacketData: getStructure(ModifyCooperationValidityPacketData.fromPartial({})),
						ModifyCooperationValidityPacketAck: getStructure(ModifyCooperationValidityPacketAck.fromPartial({})),
						ModifyCooperationInterestPacketData: getStructure(ModifyCooperationInterestPacketData.fromPartial({})),
						ModifyCooperationInterestPacketAck: getStructure(ModifyCooperationInterestPacketAck.fromPartial({})),
						RevokeCooperationPacketData: getStructure(RevokeCooperationPacketData.fromPartial({})),
						RevokeCooperationPacketAck: getStructure(RevokeCooperationPacketAck.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PublicKey: getStructure(PublicKey.fromPartial({})),
						UpdatePolicy: getStructure(UpdatePolicy.fromPartial({})),
						Validity: getStructure(Validity.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getPublicKey: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PublicKey[JSON.stringify(params)] ?? {}
		},
				getPublicKeyAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PublicKeyAll[JSON.stringify(params)] ?? {}
		},
				getValidity: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validity[JSON.stringify(params)] ?? {}
		},
				getValidityAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidityAll[JSON.stringify(params)] ?? {}
		},
				getCertificate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Certificate[JSON.stringify(params)] ?? {}
		},
				getCertificateAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CertificateAll[JSON.stringify(params)] ?? {}
		},
				getIbcConnection: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.IbcConnection[JSON.stringify(params)] ?? {}
		},
				getIbcConnectionAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.IbcConnectionAll[JSON.stringify(params)] ?? {}
		},
				getDomain: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Domain[JSON.stringify(params)] ?? {}
		},
				getDomainAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DomainAll[JSON.stringify(params)] ?? {}
		},
				getAuthenticationLog: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AuthenticationLog[JSON.stringify(params)] ?? {}
		},
				getAuthenticationLogAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AuthenticationLogAll[JSON.stringify(params)] ?? {}
		},
				getDomainCooperation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DomainCooperation[JSON.stringify(params)] ?? {}
		},
				getDomainCooperationAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DomainCooperationAll[JSON.stringify(params)] ?? {}
		},
				getCooperationLog: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationLog[JSON.stringify(params)] ?? {}
		},
				getCooperationLogAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationLogAll[JSON.stringify(params)] ?? {}
		},
				getCheckEstablishedCooperationByChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CheckEstablishedCooperationByChannel[JSON.stringify(params)] ?? {}
		},
				getEstablishedCooperationByChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EstablishedCooperationByChannel[JSON.stringify(params)] ?? {}
		},
				getForwardPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ForwardPolicy[JSON.stringify(params)] ?? {}
		},
				getForwardPolicyAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ForwardPolicyAll[JSON.stringify(params)] ?? {}
		},
				getRetrieveForwardPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RetrieveForwardPolicy[JSON.stringify(params)] ?? {}
		},
				getDomainMap: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DomainMap[JSON.stringify(params)] ?? {}
		},
				getDomainMapAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DomainMapAll[JSON.stringify(params)] ?? {}
		},
				getCooperationNetworkFeatures: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationNetworkFeatures[JSON.stringify(params)] ?? {}
		},
				getCooperationNetworkFeaturesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationNetworkFeaturesAll[JSON.stringify(params)] ?? {}
		},
				getCooperationData: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationData[JSON.stringify(params)] ?? {}
		},
				getCooperationDataAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationDataAll[JSON.stringify(params)] ?? {}
		},
				getCooperationNetwork: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationNetwork[JSON.stringify(params)] ?? {}
		},
				getCooperationNetworkAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationNetworkAll[JSON.stringify(params)] ?? {}
		},
				getUpdatePolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UpdatePolicy[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: crossdomain.cdac initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPublicKey({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPublicKey( key.id)).data
				
					
				commit('QUERY', { query: 'PublicKey', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPublicKey', payload: { options: { all }, params: {...key},query }})
				return getters['getPublicKey']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPublicKey API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPublicKeyAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPublicKeyAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryPublicKeyAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PublicKeyAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPublicKeyAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPublicKeyAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPublicKeyAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidity({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidity( key.id)).data
				
					
				commit('QUERY', { query: 'Validity', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidity', payload: { options: { all }, params: {...key},query }})
				return getters['getValidity']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidity API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidityAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidityAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryValidityAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ValidityAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidityAll', payload: { options: { all }, params: {...key},query }})
				return getters['getValidityAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidityAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCertificate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCertificate( key.id)).data
				
					
				commit('QUERY', { query: 'Certificate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCertificate', payload: { options: { all }, params: {...key},query }})
				return getters['getCertificate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCertificate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCertificateAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCertificateAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCertificateAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CertificateAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCertificateAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCertificateAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCertificateAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryIbcConnection({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryIbcConnection( key.id)).data
				
					
				commit('QUERY', { query: 'IbcConnection', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryIbcConnection', payload: { options: { all }, params: {...key},query }})
				return getters['getIbcConnection']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryIbcConnection API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryIbcConnectionAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryIbcConnectionAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryIbcConnectionAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'IbcConnectionAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryIbcConnectionAll', payload: { options: { all }, params: {...key},query }})
				return getters['getIbcConnectionAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryIbcConnectionAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomain({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomain( key.id)).data
				
					
				commit('QUERY', { query: 'Domain', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomain', payload: { options: { all }, params: {...key},query }})
				return getters['getDomain']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomain API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomainAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomainAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryDomainAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DomainAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomainAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDomainAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomainAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAuthenticationLog({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAuthenticationLog( key.id)).data
				
					
				commit('QUERY', { query: 'AuthenticationLog', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAuthenticationLog', payload: { options: { all }, params: {...key},query }})
				return getters['getAuthenticationLog']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAuthenticationLog API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAuthenticationLogAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAuthenticationLogAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryAuthenticationLogAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AuthenticationLogAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAuthenticationLogAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAuthenticationLogAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAuthenticationLogAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomainCooperation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomainCooperation( key.id)).data
				
					
				commit('QUERY', { query: 'DomainCooperation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomainCooperation', payload: { options: { all }, params: {...key},query }})
				return getters['getDomainCooperation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomainCooperation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomainCooperationAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomainCooperationAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryDomainCooperationAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DomainCooperationAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomainCooperationAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDomainCooperationAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomainCooperationAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationLog({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationLog( key.id)).data
				
					
				commit('QUERY', { query: 'CooperationLog', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationLog', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationLog']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationLog API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationLogAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationLogAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCooperationLogAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CooperationLogAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationLogAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationLogAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationLogAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCheckEstablishedCooperationByChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCheckEstablishedCooperationByChannel( key.channel)).data
				
					
				commit('QUERY', { query: 'CheckEstablishedCooperationByChannel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCheckEstablishedCooperationByChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getCheckEstablishedCooperationByChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCheckEstablishedCooperationByChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEstablishedCooperationByChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEstablishedCooperationByChannel( key.channel)).data
				
					
				commit('QUERY', { query: 'EstablishedCooperationByChannel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEstablishedCooperationByChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getEstablishedCooperationByChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEstablishedCooperationByChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryForwardPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryForwardPolicy( key.id)).data
				
					
				commit('QUERY', { query: 'ForwardPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryForwardPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getForwardPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryForwardPolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryForwardPolicyAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryForwardPolicyAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryForwardPolicyAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ForwardPolicyAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryForwardPolicyAll', payload: { options: { all }, params: {...key},query }})
				return getters['getForwardPolicyAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryForwardPolicyAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRetrieveForwardPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRetrieveForwardPolicy()).data
				
					
				commit('QUERY', { query: 'RetrieveForwardPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRetrieveForwardPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getRetrieveForwardPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRetrieveForwardPolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomainMap({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomainMap( key.domainIndex)).data
				
					
				commit('QUERY', { query: 'DomainMap', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomainMap', payload: { options: { all }, params: {...key},query }})
				return getters['getDomainMap']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomainMap API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDomainMapAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDomainMapAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryDomainMapAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DomainMapAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDomainMapAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDomainMapAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDomainMapAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationNetworkFeatures({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationNetworkFeatures( key.id)).data
				
					
				commit('QUERY', { query: 'CooperationNetworkFeatures', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationNetworkFeatures', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationNetworkFeatures']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationNetworkFeatures API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationNetworkFeaturesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationNetworkFeaturesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCooperationNetworkFeaturesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CooperationNetworkFeaturesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationNetworkFeaturesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationNetworkFeaturesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationNetworkFeaturesAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationData({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationData( key.labelIndex)).data
				
					
				commit('QUERY', { query: 'CooperationData', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationData', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationData']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationData API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationDataAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationDataAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCooperationDataAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CooperationDataAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationDataAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationDataAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationDataAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationNetwork({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationNetwork( key.id)).data
				
					
				commit('QUERY', { query: 'CooperationNetwork', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationNetwork', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationNetwork']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationNetwork API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationNetworkAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationNetworkAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCooperationNetworkAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CooperationNetworkAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationNetworkAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationNetworkAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationNetworkAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUpdatePolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUpdatePolicy()).data
				
					
				commit('QUERY', { query: 'UpdatePolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUpdatePolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getUpdatePolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUpdatePolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCooperationNetwork({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetwork(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCooperationNetwork:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCooperationNetwork({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetwork(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCooperationNetwork:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCooperationData({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationData(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationData:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCooperationData:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateAuthenticationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateAuthenticationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateAuthenticationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateAuthenticationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateAuthenticationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateAuthenticationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCooperationData({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationData(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationData:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCooperationData:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendAuthenticateDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendAuthenticateDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendAuthenticateDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendAuthenticateDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateDomainMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomainMap(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomainMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDomainMap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePublicKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePublicKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePublicKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePublicKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendRevokeCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendRevokeCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRevokeCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendRevokeCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePublicKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePublicKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePublicKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePublicKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePublicKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePublicKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePublicKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePublicKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateIbcConnection({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateIbcConnection(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateIbcConnection:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateIbcConnection:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendDisableCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendDisableCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendDisableCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendDisableCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendModifyCooperationCost({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationCost(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationCost:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendModifyCooperationCost:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendEnableCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendEnableCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendEnableCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendEnableCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgGenerateCooperationNetwork({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgGenerateCooperationNetwork(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGenerateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgGenerateCooperationNetwork:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCooperationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCooperationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendModifyCooperationInterest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationInterest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationInterest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendModifyCooperationInterest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteDomainMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomainMap(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomainMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteDomainMap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendExchangeCooperationData({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendExchangeCooperationData(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendExchangeCooperationData:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendExchangeCooperationData:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateUpdatePolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateUpdatePolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateUpdatePolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateUpdatePolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateUpdatePolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateUpdatePolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateDomainCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomainCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateDomainCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateIbcConnection({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateIbcConnection(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateIbcConnection:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateIbcConnection:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCooperationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCooperationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateDomainCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomainCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDomainCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteAuthenticationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteAuthenticationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteAuthenticationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteDomainCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomainCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteDomainCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendForwardCooperationData({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendForwardCooperationData(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendForwardCooperationData:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendForwardCooperationData:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteIbcConnection({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteIbcConnection(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteIbcConnection:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteIbcConnection:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCooperationLog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationLog(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationLog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCooperationLog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendEstablishCooperation({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendEstablishCooperation(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendEstablishCooperation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendEstablishCooperation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCooperationNetwork({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetwork(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCooperationNetwork:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendModifyCooperationValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendModifyCooperationValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCooperationData({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationData(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationData:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCooperationData:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteUpdatePolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteUpdatePolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteUpdatePolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateDomainMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomainMap(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomainMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateDomainMap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCooperationNetwork({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetwork(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCooperationNetwork:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCooperationNetwork({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetwork(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCooperationNetwork:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCooperationData({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationData(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationData:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCooperationData:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateAuthenticationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateAuthenticationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateAuthenticationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateAuthenticationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateAuthenticationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateAuthenticationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCooperationData({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationData(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationData:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCooperationData:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendAuthenticateDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendAuthenticateDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendAuthenticateDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendAuthenticateDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateDomainMap({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomainMap(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomainMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDomainMap:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePublicKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePublicKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePublicKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePublicKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendRevokeCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendRevokeCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRevokeCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendRevokeCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePublicKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePublicKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePublicKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePublicKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePublicKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePublicKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePublicKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePublicKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateIbcConnection({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateIbcConnection(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateIbcConnection:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateIbcConnection:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendDisableCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendDisableCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendDisableCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendDisableCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendModifyCooperationCost({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationCost(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationCost:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendModifyCooperationCost:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendEnableCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendEnableCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendEnableCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendEnableCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgGenerateCooperationNetwork({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgGenerateCooperationNetwork(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGenerateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgGenerateCooperationNetwork:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCooperationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCooperationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendModifyCooperationInterest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationInterest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationInterest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendModifyCooperationInterest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteDomainMap({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomainMap(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomainMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteDomainMap:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendExchangeCooperationData({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendExchangeCooperationData(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendExchangeCooperationData:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendExchangeCooperationData:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateUpdatePolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateUpdatePolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateUpdatePolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateUpdatePolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateUpdatePolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateUpdatePolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateDomainCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomainCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateDomainCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateIbcConnection({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateIbcConnection(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateIbcConnection:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateIbcConnection:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCooperationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCooperationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateDomainCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDomainCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDomainCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteAuthenticationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteAuthenticationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteAuthenticationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteAuthenticationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteDomainCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDomainCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDomainCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteDomainCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendForwardCooperationData({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendForwardCooperationData(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendForwardCooperationData:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendForwardCooperationData:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteIbcConnection({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteIbcConnection(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteIbcConnection:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteIbcConnection:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCooperationLog({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationLog(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationLog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCooperationLog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendEstablishCooperation({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendEstablishCooperation(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendEstablishCooperation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendEstablishCooperation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCooperationNetwork({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetwork(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetwork:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCooperationNetwork:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendModifyCooperationValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSendModifyCooperationValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendModifyCooperationValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendModifyCooperationValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCooperationData({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationData(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationData:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCooperationData:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteUpdatePolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteUpdatePolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteUpdatePolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteUpdatePolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateDomainMap({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDomainMap(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDomainMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateDomainMap:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
