crossdomaind tx crossdomain update-cooperation-network-features 0 0 "" "" "2022-06-12 16:20:00" '{"notBefore":"2023-01-01 00:00:00 +0000 UTC","notAfter":"2026-01-01 00:00:00 +0000 UTC"}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-cooperation-network-features  --node tcp://localhost:26657
sleep 10

crossdomaind tx cdac generate-cooperation-network --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query cdac list-cooperation-network --node tcp://localhost:26657

#30
