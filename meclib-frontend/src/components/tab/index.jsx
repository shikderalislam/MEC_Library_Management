const Tab = ({ activeTab, tabName, children }) => {
  if (activeTab === tabName) {
    return children;
  }
  return null;
};

export default Tab;
