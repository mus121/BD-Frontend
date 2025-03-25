import styles from './styles.module.scss';
import { useFetchAllConnection } from '@/hooks/profile/connection';
import CardSelect from '../cardSelected/index';
import ProfileLoading from '@/components/shared/shimmer/selectedProfile/profileLoading';

export default function SelectedCard() {
  const { data: fetchAllConnection, isLoading } = useFetchAllConnection();

  if (isLoading) {
    return <ProfileLoading />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.cardBody}>
        {fetchAllConnection?.map(
          (
            {
              first_name,
              last_name,
              headline,
              profile_picture,
              public_identifier,
              entity_urn,
            }: {
              first_name: string;
              last_name: string;
              headline: string;
              profile_picture: string;
              public_identifier: string;
              entity_urn: string;
            },
            index: number,
          ) => (
            <div key={index}>
              <CardSelect
                profile={{
                  firstName: first_name || '',
                  lastName: last_name || '',
                  headline: headline || '',
                  profilePicture: profile_picture || '',
                  publicIdentifier: public_identifier || '',
                  entityUrn: entity_urn || '',
                  id: 0,
                }}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
