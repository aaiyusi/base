package com.samton.erp.api.warehouse.bean.entity;

import java.util.List;

public class WhouseStorageChild {

	
	   private TErpWhouseStorage whouseStorage;//主表数据
	    
	   private List<TErpWhouseStorageDetail> wsdList;//子表数据

		public TErpWhouseStorage getWhouseStorage() {
			return whouseStorage;
		}

		public void setWhouseStorage(TErpWhouseStorage whouseStorage) {
			this.whouseStorage = whouseStorage;
		}

		public List<TErpWhouseStorageDetail> getWsdList() {
			return wsdList;
		}

		public void setWsdList(List<TErpWhouseStorageDetail> wsdList) {
			this.wsdList = wsdList;
		}


	    
	    
	    
}
