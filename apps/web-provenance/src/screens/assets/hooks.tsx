import { MarkerAccountDocument, MarkerAccountQuery } from '@/graphql/types/general_types';
import useInfiniteQuery from '@/hooks/useInfiniteQuery';
import useShallowMemo from '@/hooks/useShallowMemo';
import MarketType from '@/screens/assets/components/MarkerType';
import Price from '@/screens/assets/components/Price';
import ShowMore from '@/screens/assets/components/ShowMore';
import Supply from '@/screens/assets/components/Supply';
import TokenName from '@/screens/assets/components/TokenName';
import { AccessControl, AssetQueryVariable, AssetType } from '@/screens/assets/types';

/**
 * It takes a MarkerAccountQuery object and returns an array of MarkerAccount objects
 * @param {MarkerAccountQuery | undefined} data - MarkerAccountQuery | undefined
 */
const formatter = (data: MarkerAccountQuery | undefined): AssetType[] =>
  data?.marker_account?.map((x) => {
    let accessControls: AccessControl[] = [];
    try {
      accessControls = JSON.parse(x.access_control) as AccessControl[];
    } catch (_) {
      // ignore
    }
    return {
      tokenName: (
        <TokenName address={x.address} denom={x.denom} tokenName={x.token_unit?.token_name} />
      ),
      price: <Price denom={x.token_unit?.denom ?? ''} />,
      markerType: <MarketType markerType={x.marker_type} />,
      supply: <Supply supply={x.supply} />,
      showMore: (
        <ShowMore
          accessControls={accessControls}
          allowGovernanceControl={x.allow_governance_control}
          statusId={x.status}
        />
      ),
    };
  }) ?? [];

export const useAssets = (searchText: string) => {
  const ilike = searchText.trim() ? `%${searchText.trim().replace(/([_%\\])/g, '\\$1')}%` : '';
  const initialVariables = useShallowMemo<AssetQueryVariable>({
    marker_account_bool_exp: {
      ...(ilike ? { denom: { _ilike: ilike } } : {}),
    },
  });
  return useAssetsByOffset(initialVariables, 0);
};

export const useAssetsByOffset = (variables: AssetQueryVariable, offset: number) => {
  const result = useInfiniteQuery<MarkerAccountQuery, AssetQueryVariable, AssetType>({
    document: MarkerAccountDocument,
    formatter,
    variables,
    offset,
  });
  const cursor = useShallowMemo(JSON.stringify(variables));
  return { ...result, variables, cursor };
};