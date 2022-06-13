
bash execution/chains/earth/configuration.sh

#crossdomaind tx cdac create-domain-cooperation [label] [cooperation-type] [source-domain] [remote-domain] [validity] [interest] [cost] [creation-date] [creation-timestamp] [update-date] [update-timestamp] [status] [flags]
crossdomaind tx cdac create-domain-cooperation "earth-mars.1" "Direct" '{"name":"earth","domainType":"Local","location":"Tunisie","Certificate":{},"ibc-connection":{}}' '{"name":"mars.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}' "computing" 200 "2022-02-03 00:00:00" "1643846400000000000" "2022-02-03 00:00:00" "1643846400000000000" "Enabled" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac create-domain-cooperation "mars.1-mars.2.1" "Indirect" '{"name":"mars.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"name":"mars.2.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}' "computing" 200 "2022-02-03 00:00:00" "1643846400000000000" "2022-02-03 00:00:00" "1643846400000000000" "Enabled" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac create-domain-cooperation "mars.1-mars.2.2" "Indirect" '{"name":"mars.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"name":"mars.2.2","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}' "computing" 200 "2022-02-03 00:00:00" "1643846400000000000" "2022-02-03 00:00:00" "1643846400000000000" "Enabled" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac create-domain-cooperation "mars.2.1-mars.3.1" "Indirect" '{"name":"mars.2.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"name":"mars.3.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}' "computing" 200 "2022-02-03 00:00:00" "1643846400000000000" "2022-02-03 00:00:00" "1643846400000000000" "Enabled" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac create-domain-cooperation "mars.3.1-mars.4.1" "Indirect" '{"name":"mars.3.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"name":"mars.4.1","domainType":"Remote","location":"france","Certificate":{},"ibc-connection":{}}' '{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}' "computing" 200 "2022-02-03 00:00:00" "1643846400000000000" "2022-02-03 00:00:00" "1643846400000000000" "Enabled" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657

crossdomaind tx cdac generate-cooperation-network --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query cdac list-cooperation-network --node tcp://localhost:26657

#crossdomaind tx cdac create-delegation-path [delegator] [delegatee] [flags]
crossdomaind tx cdac create-delegation-path '{"name":"mars.1","domainType":"Remote","location":"france"}' '{"name":"mars.4.1","domainType":"Remote","location":"france"}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx cdac create-delegation-path '{"name":"mars.2.1","domainType":"Remote","location":"france"}' '{"name":"mars.4.1","domainType":"Remote","location":"france"}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-delegation-path --node tcp://localhost:26657

crossdomaind query cdac list-calculation-time  --node tcp://localhost:26657

#request-access [object] [action]


crossdomaind query cdac request-access "" "" --home ~/.earth --chain-id earth --node tcp://localhost:26657 