
mkdir -p $HOME/.hermes && touch $HOME/.hermes/config.toml

cat "execution/hermes/config.toml" > "$HOME/.hermes/config.toml"

hermes -c ~/.hermes/config.toml config validate


hermes -c ~/.hermes/config.toml keys add earth -f execution/chains/earth/key_seed.json
hermes -c ~/.hermes/config.toml keys add mars -f execution/chains/mars/key_seed.json
hermes -c ~/.hermes/config.toml keys add venus -f execution/chains/venus/key_seed.json
hermes -c ~/.hermes/config.toml keys add jupiter -f execution/chains/jupiter/key_seed.json
hermes -c ~/.hermes/config.toml keys add neptune -f execution/chains/neptune/key_seed.json

#earth-mars
hermes -c ~/.hermes/config.toml create channel earth --chain-b mars --port-a cdac --port-b cdac -o ordered --channel-version cdac-1 --new-client-connection
#earth-venus
hermes -c ~/.hermes/config.toml create channel earth --chain-b venus --port-a cdac --port-b cdac -o ordered --channel-version cdac-1 --new-client-connection
#mars-neptune
hermes -c ~/.hermes/config.toml create channel mars --chain-b neptune --port-a cdac --port-b cdac -o ordered --channel-version cdac-1 --new-client-connection
#mars-jupiter
hermes -c ~/.hermes/config.toml create channel mars --chain-b jupiter --port-a cdac --port-b cdac -o ordered --channel-version cdac-1 --new-client-connection


hermes -c ~/.hermes/config.toml start




#$HOME/.hermes/keys/

#hermes tx raw packet-recv earth mars cdac channel-0


#./scripts/dev-env ~/.hermes/config.toml earth mars
#https://github.com/informalsystems/ibc-rs/blob/master/scripts/dev-env
#hermes create channel ibc-0 --chain-b ibc-1 --port-a transfer --port-b transfer --new-client-connection
#hermes create channel earth --chain-b mars --port-a cdac --port-b cdac --new-client-connection


#hermes query tx events earth A963DEC767778A5AB6E1268D7865CBEECBB57C9147AF9EB2AB7F2370E40E5C0F

#https://hermes.informal.systems/config.html

#hermes -c ~/.hermes/config.toml query connection channels mars connection-0

#vi ~/.hermes/config.toml
#cat >  ~/.hermes/config.toml
#cat   ~/.hermes/config.toml

#file at '/home/gitpod/.hermes/config.toml'
#https://github.com/informalsystems/ibc-rs/blob/master/config.toml

#bash execution/hermes/script ~/.hermes/config.toml earth mars

#crossdomaind keys  add testkey --output json
#Enter keyring passphrase:
#Re-enter keyring passphrase:{"name":"testkey","type":"local","address":"cosmos1twaswzyhj4w2hrhllanzp7cvwejenw4qalnegs","pubkey":"{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"A6HbErT/HvZdXq7PBerWoUM5JdBumH8C+oV7GvTOSQHI\"}","mnemonic":"achieve loan require spoil token judge chief huge lumber glide dumb retreat donkey vendor giant mansion tennis clap tooth stuff arctic brave banner above"}

