import CheckboxComponent from './checkBoxComponent/checkBoxComponent';
import styles from './styles.module.scss';

const checkBox = () => {
  return (
    <div>
      {/* <span>{index}</span> */}
      <CheckboxComponent
        checked={null}
        onClick={null}
      />
    </div>
  );
};

export default checkBox;
