import getListOfCatalogGroups from '@/services/index';

const actions = {
  async getCatalogGroupList(context, payloadId) {
    // maybe get request to server
    context.commit('showModalWindow');
    const d = await getListOfCatalogGroups(payloadId);
    context.commit('writeDataInModalWindow', d);
  },
};

export { actions };
export default actions;
