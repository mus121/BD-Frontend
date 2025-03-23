'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import Check from '../../../shared/checkBox/enable/index';
import Edit from '../../../shared/svg/Edit';
import Click from '../../../shared/svg/Click';
import Close from '../../../shared/svg/Close';
import SecondaryButton from '@/component/shared/button/SecondaryButton';

interface Label {
  id: string;
  text: string;
  checked: boolean;
}

const ProfileSegments = () => {
  const [labels, setLabels] = useState<Label[]>([
    {
      id: '1',
      text: 'CTOs from AI-based SaaS platforms in the US with over 100 employees',
      checked: true,
    },
    {
      id: '2',
      text: 'CTOs from AI-based SaaS platforms in the US with over 100 employees',
      checked: true,
    },
    {
      id: '3',
      text: 'CTOs from AI-based, skilled in leadership and communication',
      checked: true,
    },
    {
      id: '4',
      text: 'CTOs from AI-based, skilled in leadership and communication',
      checked: true,
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [newLabelText, setNewLabelText] = useState('');
  const [addingNew, setAddingNew] = useState(false);

  // Toggle Checkbox
  const handleCheckboxChange = (id: string) => {
    setLabels(prev =>
      prev.map(label => (label.id === id ? { ...label, checked: !label.checked } : label)),
    );
  };

  // Start Editing
  const handleEditClick = (id: string, text: string) => {
    setEditingId(id);
    setNewLabelText(text);
  };

  // Save Edited Label
  const handleSaveEdit = (id: string) => {
    setLabels(prev =>
      prev.map(label => (label.id === id ? { ...label, text: newLabelText } : label)),
    );
    setEditingId(null);
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Start Adding New Label
  const handleAddLabel = () => {
    setAddingNew(true);
    setNewLabelText('');
  };

  // Save New Label
  const handleSaveNewLabel = () => {
    if (newLabelText.trim() !== '') {
      setLabels(prev => [
        ...prev,
        { id: Date.now().toString(), text: newLabelText, checked: false },
      ]);
    }
    setAddingNew(false);
  };

  return (
    <div className={styles.container}>
      <SecondaryButton
        colorVariant='orange'
        text='+ New Label'
        type='button'
        onClick={handleAddLabel}
        secondaryButtonClassName={styles.addLabel}
      />
      <div className={styles.labelsList}>
        {labels.map(label =>
          editingId === label.id ? (
            <div
              key={label.id}
              className={styles.editMode}
            >
              <input
                type='text'
                value={newLabelText}
                onChange={e => setNewLabelText(e.target.value)}
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => handleSaveEdit(label.id)}
                  className={styles.close}
                >
                  <Close size={14} />
                </button>
                <button
                  onClick={handleCancelEdit}
                  className={styles.click}
                >
                  <Click size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div
              key={label.id}
              className={styles.labelItem}
            >
              <span>{label.text}</span>
              <button
                className={styles.editButton}
                onClick={() => handleEditClick(label.id, label.text)}
              >
                <span className={styles.editIcon}>
                  <Edit size={18} />
                </span>
              </button>
            </div>
          ),
        )}

        {addingNew && (
          <div className={styles.addMode}>
            <input
              type='text'
              value={newLabelText}
              onChange={e => setNewLabelText(e.target.value)}
              className={styles.input}
            />
            <div className={styles.buttonContainer}>
              <button
                onClick={handleSaveNewLabel}
                className={styles.close}
              >
                <Close size={14} />
              </button>
              <button
                onClick={() => setAddingNew(false)}
                className={styles.click}
              >
                <Click size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSegments;
