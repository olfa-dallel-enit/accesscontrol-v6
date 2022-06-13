crossdomaind  tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26657 
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26657 
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26657 
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26657

crossdomaind tx crossdomain create-forward-policy "broadcast" "" "" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-forward-policy --node tcp://localhost:26657

crossdomaind tx crossdomain  create-decision-policy 0 '' '' '{}' "" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15


#create-update-policy [query] [event] [periodical-query]
crossdomaind tx cdac create-update-policy false true false --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query cdac show-update-policy --node tcp://localhost:26657

#crossdomaind tx crossdomain create-cooperation-network-features [depth] [cost] [interest-list] [location-list] [last-update] [validity] [flags]
crossdomaind tx crossdomain create-cooperation-network-features 0 0 "" "" "2022-01-01 00:00:00" '{"notBefore":"2023-01-01 00:00:00 +0000 UTC","notAfter":"2026-01-01 00:00:00 +0000 UTC"}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-cooperation-network-features  --node tcp://localhost:26657

