import { FlatList, View } from 'react-native';

function ProductList(props) {
  function renderItemHistorySearchBrand({ item }) {
    return <View item={item} />;
  }

  const extract = (item, index) => index.toString();

  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      data={[]}
      renderItem={renderItemHistorySearchBrand}
      keyExtractor={extract}
    />
  );
}

export default ProductList;
