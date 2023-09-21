interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Owner',
    'Logistics Manager',
    'Admin',
    'Business Owner',
    'Store Manager',
    'Store Employee',
    'Customer Service Representative',
    'Individual Customer',
  ],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read tool information', 'Create rental', 'Read rental information', 'Read outlet information'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage outlets', 'Manage tools'],
  getQuoteUrl: 'https://app.roq.ai/proposal/414260be-68ad-464e-bc6d-741a22219f0e',
};
