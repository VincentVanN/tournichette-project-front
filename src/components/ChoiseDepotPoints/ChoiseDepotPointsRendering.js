import { useSelector } from 'react-redux';
import Page from '../Page/Page';
import ChoiseDepotPoints from './ChoiseDepotPoints';

function ChoiseDepotPointsRendering() {
  const width = useSelector((state) => state.navigation.width);
  if (width >= 1024) {
    return (
      <ChoiseDepotPoints />
    );
  }
  return (
    <Page>
      <ChoiseDepotPoints />
    </Page>
  );
}

export default ChoiseDepotPointsRendering;
