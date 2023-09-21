import { LogisticsInterface } from 'interfaces/logistics';
import { ToolInterface } from 'interfaces/tool';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  location: string;
  company_id: string;
  store_manager_id: string;
  phone_number?: string;
  email?: string;
  operating_hours?: string;
  created_at?: any;
  updated_at?: any;
  logistics?: LogisticsInterface[];
  tool?: ToolInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    logistics?: number;
    tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  company_id?: string;
  store_manager_id?: string;
  phone_number?: string;
  email?: string;
  operating_hours?: string;
}
