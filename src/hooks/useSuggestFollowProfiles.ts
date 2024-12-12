import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowedProfiles } from '@/api/getLiProfiles';
import { setProfiles } from '@/store/slices/followedProfiles';
import { RootState } from '@/store/store';

export const useSuggestFollowProfiles = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state: RootState) => state.followedProfiles);

  const query = useQuery({
    queryKey: ['followedProfiles'],
    queryFn: fetchFollowedProfiles,
    onSuccess: data => {
      dispatch(setProfiles(data || []));
    },
  });
};
