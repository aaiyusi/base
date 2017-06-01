package com.samton.erp.api.warehouse.bean.entity;

import java.util.List;

public class WhouseCheckChild {

	
	   private TErpWhouseCheck whouseCheck;
	    
	    private List<TErpWhouseCheckDetail> wcdList;

		public TErpWhouseCheck getWhouseCheck() {
			return whouseCheck;
		}

		public void setWhouseCheck(TErpWhouseCheck whouseCheck) {
			this.whouseCheck = whouseCheck;
		}

		public List<TErpWhouseCheckDetail> getWcdList() {
			return wcdList;
		}

		public void setWcdList(List<TErpWhouseCheckDetail> wcdList) {
			this.wcdList = wcdList;
		}

	    
}
