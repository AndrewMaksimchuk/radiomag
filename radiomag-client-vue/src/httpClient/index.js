import { HTTPget } from '../../../endpoints';
import GETdata from './GET';

export const GET = {
    catalog: async () => GETdata(HTTPget.catalog),
    catalogGroups: async (id) => GETdata(HTTPget.catalogGroups(id)),
    slider: async () => GETdata(HTTPget.slider),
    group: async (id) => GETdata(HTTPget.group(id)),
    groupName: async (id) => GETdata(HTTPget.groupName(id)),
    
}
