package keeper

import (
	"github.com/irclausen/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
